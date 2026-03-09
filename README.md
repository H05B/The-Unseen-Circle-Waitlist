# The Unseen Circle Waitlist

Production-ready waitlist landing page built with Next.js App Router, Tailwind CSS, and Supabase.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env file:
   ```bash
   cp .env.example .env.local
   ```
3. Fill env values from Supabase.
4. Run dev server:
   ```bash
   npm run dev
   ```

## Supabase schema

```sql
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text,
  feature_request text,
  created_at timestamp with time zone default now()
);
```
