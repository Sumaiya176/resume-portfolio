# Deployment (Vercel)

## Prerequisites

- Node.js 18+
- Git
- Vercel account (or use Vercel CLI)

## Deploy to Vercel

### Option 1: Vercel Dashboard

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the repository and leave framework preset as **Next.js**.
4. Root directory: `./` (default).
5. Build command: `npm run build` (default).
6. Output directory: `.next` (default for Next.js).
7. Deploy.

### Option 2: Vercel CLI

```bash
npm i -g vercel
cd c:\Sumaiya\sumaiya-portfolio
vercel
```

Follow prompts (link to existing project or create new one). Production deploy:

```bash
vercel --prod
```

## Environment Variables

This project does not require env vars for basic deployment. If you add analytics, contact forms, or API routes later, add them in:

- **Vercel:** Project → Settings → Environment Variables.

## Post-deploy Checklist

1. **Resume:** Set `resumeUrl` in `lib/constants.ts` to your resume PDF URL (e.g. `/resume.pdf` in `public/` or an external link).
2. **Contact:** Update `email`, `linkedin`, `github` in `lib/constants.ts` with real URLs.
3. **Project links:** Set `liveUrl` and `githubUrl` for each project in `lib/constants.ts`.
4. **Screenshots:** Add project images to `public/projects/` and set `image` in each project (e.g. `/projects/blood-bank.png`).
5. **Custom domain:** In Vercel → Project → Settings → Domains, add your domain and follow DNS instructions.

## Build & Run Locally

```bash
npm install
npm run build
npm start
```

Dev:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
