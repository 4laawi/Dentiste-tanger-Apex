# Deployment & SEO Edge Function

This project uses a Vercel Edge Function (`api/index.ts`) to provide server-side SEO rendering for social media bots and search engine crawlers.

## Architecture

Since the application is a Vite-based SPA, standard `middleware.ts` is not automatically detected. Instead, we use a catch-all rewrite in `vercel.json` that routes all page requests through an Edge Function.

1.  **Routing**: `vercel.json` routes all non-asset requests to `/api/index`.
2.  **Detection**: The Edge Function checks the `User-Agent` for bots.
3.  **Regular Users**: For normal browsers, the function fetches and returns the static `index.html`.
4.  **Bots**: For crawlers, the function fetches `index.html`, injects the appropriate meta tags (Title, Description, Open Graph, Twitter), and returns the modified HTML.
5.  **Headers**: Every response handled by the function includes `x-edge-hit: true`.

## Supported Routes

The Edge Function provides specific metadata for:
- Home (`/` and `/en`)
- About (`/about`)
- Problems We Treat (`/problemes-traites`)
- Doctor Profile (`/dentiste-reda-saoui`)
- Blog Index (`/blog`)
- Individual Blog Posts (`/blog/[slug]`)
- Contact (`/contact`)
- Dental Emergencies (`/urgence-dentaire-tanger`)
- English Speaking Dentist (`/en/english-speaking-dentist-tangier`)
- Dental Implants (`/dental-implants-morocco`)

## How to Test

You can verify the Edge Function is running by checking for the `x-edge-hit` header in any page request.

### Testing a Regular Request
```bash
curl -I https://apexdental.ma/
```
Look for `x-edge-hit: true`.

### Testing a Bot Request
```bash
curl -A "WhatsApp/2.0" -v https://apexdental.ma/
```
Look for `x-edge-hit: true`, `x-bot-detected: true`, and the `<!-- Server-Side Injected SEO for Bots (Edge Function) -->` comment in the HTML.
