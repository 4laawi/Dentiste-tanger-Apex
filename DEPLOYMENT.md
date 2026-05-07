# Deployment & SEO Middleware

This project includes a Vercel Edge Middleware (`middleware.ts`) designed to enhance SEO and social media previews for the Single Page Application (SPA).

## What the Middleware Does

Since the application is a React SPA, most metadata is usually handled client-side via `react-helmet-async`. However, many social media crawlers (WhatsApp, Facebook, Twitter, LinkedIn) and some search engines do not execute JavaScript, which can result in poor previews or incomplete indexing.

The middleware intercepts requests from known bots and crawlers:
1.  **Detection**: It checks the `User-Agent` header for bot identifiers.
2.  **Metadata Mapping**: It determines the correct `title`, `description`, and `og:image` based on the request path (supporting both French and English `/en/` routes).
3.  **Server-Side Injection**: It fetches the base `index.html`, injects the relevant meta tags directly into the `<head>` section, and returns the modified HTML to the bot.
4.  **Passthrough**: Requests from regular users are passed through untouched.
5.  **Standards-Based**: The middleware uses standard Web APIs (`Request`, `Response`, `fetch`) and does not depend on the `next` package, making it compatible with this Vite project.

## Supported Routes

The middleware currently provides specific metadata for:
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

You can test the middleware locally or on a deployed environment using `curl` by spoofing a bot's User-Agent.

### Testing the Home Page (French)
```bash
curl -H "User-Agent: WhatsApp/2.21.12.21 A" https://apexdental.ma/ -v
```

### Testing the About Page (English)
```bash
curl -H "User-Agent: facebookexternalhit/1.1" https://apexdental.ma/en/about -v
```

### Testing a Blog Post
```bash
curl -H "User-Agent: Twitterbot/1.1" https://apexdental.ma/blog/avenir-dentisterie-numerique-tanger -v
```

Look for the `<!-- Server-Side Injected SEO for Bots -->` comment in the `<head>` of the returned HTML to verify it's working.
