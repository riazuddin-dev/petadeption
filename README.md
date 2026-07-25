# PawHaven Client (petadeption)

Next.js frontend for the **PawHaven** pet adoption platform.

**Live:** https://petadeption.vercel.app/  

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Better Auth
- Framer Motion · Sonner · React Hook Form

## Setup

```powershell
cd "D:\Assingmant\assinment-9\client\petadeption"
npm install
```

Create `.env` / `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
# Plus Better Auth / Mongo vars used by lib/auth.js
```

```powershell
npm run dev
```

App: http://localhost:3000  

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Start production build |
| `npm run lint` | ESLint |

## Main routes

| Path | Purpose |
|------|---------|
| `/` | Landing |
| `/pets`, `/pets/[id]` | Browse & details |
| `/login`, `/register` | Auth |
| `/dashboard` | Overview |
| `/dashboard/add-pet` | Create listing |
| `/dashboard/my-listings` | Manage pets |
| `/dashboard/my-requests` | Adoption requests |

## Related

- Server: https://github.com/riazuddin-dev/sarver  
