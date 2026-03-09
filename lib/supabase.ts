const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getHeaders() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('Supabase environment variables are not configured.');
  }

  return {
    apikey: supabaseServiceRoleKey,
    Authorization: `Bearer ${supabaseServiceRoleKey}`,
    'Content-Type': 'application/json',
  };
}

export async function findWaitlistEmail(email: string) {
  const headers = getHeaders();
  const params = new URLSearchParams({
    select: 'id',
    email: `eq.${email}`,
    limit: '1',
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist?${params.toString()}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    return { ok: false as const };
  }

  const data = (await response.json()) as { id: string }[];
  return { ok: true as const, exists: data.length > 0 };
}

export async function insertWaitlistEntry(payload: {
  email: string;
  role: string;
  feature_request: string;
}) {
  const headers = {
    ...getHeaders(),
    Prefer: 'return=minimal',
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return { ok: true as const };
  }

  if (response.status === 409) {
    return { ok: false as const, duplicate: true };
  }

  return { ok: false as const, duplicate: false };
}
