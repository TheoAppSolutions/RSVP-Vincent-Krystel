# Wedding RSVP

The root page displays the wedding invitation and RSVP form. The admin dashboard is available at `/admin`.

## Run locally

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and set the Supabase URL, service role key, and admin password.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. Run `npm run dev`.

Open `/` for the invitation and `/admin` for guest responses. The RSVP form writes to the shared Supabase table. The dashboard can filter, export, and delete responses.

The active invitation components live in `components/template-3`. Shared event settings live in `lib/event.ts`, and shared media lives in `public`. Update `lib/event.ts` to change the event details or media paths.

For maps, set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` and enable Google's Maps Embed API. Set the same environment variables when deploying.
