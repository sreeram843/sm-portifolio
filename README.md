# Sriram Mentey — Portfolio

A modern personal portfolio with interactive 3D visuals, built with Next.js and React Three Fiber.

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 16 + React 19 + TypeScript | Fast dev, SEO, easy deploy to Vercel |
| **3D** | React Three Fiber + Three.js | Industry-standard WebGL; great 3D with React DX |
| **Styling** | Tailwind CSS 4 | Utility-first, responsive, dark theme |
| **Animation** | Framer Motion | Smooth scroll & entrance animations |
| **Backend** | None (pilot) | Static site; contact via mailto. Add Resend/Formspree later |

### Why not Rust/WASM for this pilot?

WebAssembly + Rust shines for **compute-heavy** tasks (physics sims, image processing, custom shaders at low level). For portfolio 3D scenes, **React Three Fiber** delivers excellent visuals with faster iteration. WASM can be added later for specific effects if needed.

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
# Production build
npm run build

# Run production server locally
npm start
```

### GitHub Actions → Vercel

Pushes to `main` run lint + build first; production deploy runs only if both pass.

Add these **GitHub repository secrets** (`Settings → Secrets and variables → Actions`):

| Secret | Where to get it |
|---|---|
| `VERCEL_TOKEN` | [Vercel → Account Settings → Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Vercel project → Settings → General, or run `vercel link` locally and read `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Same as above |

Optional env var in Vercel (or in the workflow): `NEXT_PUBLIC_CURAI_DEMO_URL=https://app.cura-i.com/demo`

If Vercel is also connected to GitHub for auto-deploy, disable **Production Auto-Deploy** in the Vercel project to avoid duplicate deployments — let the workflow handle production deploys after quality checks pass.

### Manual deploy

```bash
npx vercel --prod
```

## Project Structure

```
src/
├── app/              # Next.js app router (layout, page, globals)
├── components/
│   ├── 3d/           # Three.js / R3F scenes
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, etc.
│   └── ui/           # Shared UI primitives
└── lib/
    ├── data.ts       # Portfolio content (edit this!)
    └── utils.ts      # Utilities
```

## Customization

Edit `src/lib/data.ts` to update your bio, experience, projects, and links.

## Push to Git

```bash
git remote add origin https://github.com/YOUR_USERNAME/sm-portifolio.git
git push -u origin main
```

## License

MIT
