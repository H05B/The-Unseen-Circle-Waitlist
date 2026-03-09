'use client';

import { FormEvent, useState } from 'react';

const roles = [
  'Therapist/Counselor',
  'Psychologist',
  'Social Worker',
  'OT/PT/SLP',
  'Parent',
  'Self-care enthusiast',
  'Other',
];

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [featureRequest, setFeatureRequest] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role, featureRequest }),
      });

      if (response.status === 409) {
        setStatus('duplicate');
        return;
      }

      if (!response.ok) throw new Error('Could not submit form');

      setStatus('success');
      setEmail('');
      setRole(roles[0]);
      setFeatureRequest('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-mustard/25 bg-white/70 p-6 shadow-glow backdrop-blur-sm sm:p-8">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-charcoal">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-charcoal/20 bg-cream px-4 py-3 outline-none transition focus:border-teal"
        />
      </div>

      <div>
        <label htmlFor="role" className="mb-2 block text-sm font-semibold text-charcoal">
          I am a...
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-xl border border-charcoal/20 bg-cream px-4 py-3 outline-none transition focus:border-teal"
        >
          {roles.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="featureRequest" className="mb-2 block text-sm font-semibold text-charcoal">
          Feature request (optional)
        </label>
        <textarea
          id="featureRequest"
          rows={4}
          value={featureRequest}
          onChange={(e) => setFeatureRequest(e.target.value)}
          placeholder="What would make this marketplace essential for your practice?"
          className="w-full rounded-xl border border-charcoal/20 bg-cream px-4 py-3 outline-none transition focus:border-teal"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-teal px-4 py-3 font-semibold text-cream transition hover:bg-teal/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
      </button>

      <p className="text-sm text-charcoal/75">No credit card. No commitment. Only 150 founding spots.</p>

      {status === 'success' && <p className="text-sm font-medium text-teal">You&apos;re in. We&apos;ll be in touch soon.</p>}
      {status === 'duplicate' && <p className="text-sm font-medium text-terracotta">This email is already on the waitlist.</p>}
      {status === 'error' && <p className="text-sm font-medium text-terracotta">Something went wrong. Please try again.</p>}
    </form>
  );
}
