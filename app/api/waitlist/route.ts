import { NextResponse } from 'next/server';
import { findWaitlistEmail, insertWaitlistEntry } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? '').trim().toLowerCase();
    const role = String(body.role ?? '').trim();
    const feature_request = String(body.featureRequest ?? '').trim();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const existing = await findWaitlistEmail(email);
    if (!existing.ok) {
      return NextResponse.json({ error: 'Unable to verify email uniqueness' }, { status: 500 });
    }

    if (existing.exists) {
      return NextResponse.json({ error: 'Duplicate email' }, { status: 409 });
    }

    const insertion = await insertWaitlistEntry({ email, role, feature_request });

    if (!insertion.ok) {
      if (insertion.duplicate) {
        return NextResponse.json({ error: 'Duplicate email' }, { status: 409 });
      }
      return NextResponse.json({ error: 'Failed to save waitlist entry' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
