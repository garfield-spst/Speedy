# ⚡ Speeedy Landing Page – Quick Start

Welcome to the Speeedy landing‑page repo. Follow the steps below to run the project locally in less than five minutes.

---

## 1  Prerequisites

| Tool         | Version (or newer) | Check with            |
|--------------|-------------------|-----------------------|
| Node.js      | **18.x**          | `node -v`             |
| npm *or* pnpm| npm ≥ 10 / pnpm ≥ 8| `npm -v` / `pnpm -v`  |
| git          | any recent        | `git --version`       |

> **Tip:** If you don’t have **pnpm** (faster installs) you can globally install it once:  
> `npm i -g pnpm`

---

## 2  Install Dependencies

```bash
# inside the project folder
pnpm install        # or: npm install
```

---

## 3  Start the Dev Server

```bash
pnpm dev            # or: npm run dev
```

Open **<http://localhost:3000>** in your browser. The site auto‑reloads when you edit files.

---

## 4  Project Structure

```
speeedy-landing/
├─ src/
│  ├─ app/
│  │  └─ page.tsx          # main landing page (React + Tailwind + Framer Motion)
│  └─ components/ui/       # shadcn button & card primitives
├─ public/                 # static assets (optional)
├─ tailwind.config.ts      # Tailwind setup
├─ components.json         # shadcn-ui registry
└─ package.json            # scripts: dev / build / start
```

---

## 5  Google Forms Links

If the form URLs change:

1. Open **`src/app/page.tsx`**  
2. Search for `formSrc`  
3. Replace the Rider, Driver, or Other embed URLs (and `<THIRD_FORM_EMBED>` if still placeholder).

---

## 6  Production Build (optional)

```bash
pnpm build          # or: npm run build
```

---

## 7  Deploy (optional)

The quickest route is **Vercel**:

1. Push the repo to GitHub  
2. Sign in at <https://vercel.com> → **Add New Project**  
3. Pick your repo; keep the defaults → **Deploy**  

You’ll get a live HTTPS URL in ~1 min.

---

## 8  Troubleshooting

| Symptom                                    | Fix                                                       |
|--------------------------------------------|-----------------------------------------------------------|
| `node: command not found`                  | Install Node 18+ from <https://nodejs.org>                |
| Port already in use (`EADDRINUSE :3000`)   | Stop what’s on :3000 or run `PORT=3001 pnpm dev`          |
| Errors about `shadcn` or `framer-motion`   | Run `pnpm install` (or `npm install`) to reinstall deps   |

---

Happy coding! 🏎️

