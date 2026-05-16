# SWAT — Supply Resilience Command Center

A next-generation enterprise supply-chain command center. SWAT is the resilience layer above ERP/TMS/sourcing: AI agents continuously process supplier signals, EDI feeds, market indices and lane events and surface them in a mission-control UI.

The demo carries a bicycle-OEM data ecosystem — 19 suppliers (AeroCarbon, TrailFlex, Velora, Pinnacle Forge, IronSpine, et al.), 12 critical issues (ISS-1041 et al.), open POs and a 5-model BOM (Hybrid / Child / Sports / Dirt / Tricycle).

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS — custom dark mission-control palette (`ink-*`, `signal-*`, `critical-*`)
- Framer Motion (entrance staggers)
- lucide-react · clsx

## Run

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Architecture

```
src/
  app/
    layout.tsx              # Root layout — mounts AppShell
    page.tsx                # Command Center (hero page)
    disruptions/page.tsx    # Disruption Workspace
    suppliers/page.tsx      # Supplier Network
    parts/page.tsx          # Parts & Orders (BOM + PO)
    plan/page.tsx           # Plan & Simulate
    intelligence/page.tsx   # AI Operations (6 agents)
    platform/page.tsx       # Platform settings
  components/
    layout/                 # AppShell · Sidebar · Topbar · AIAdvisor
    ui/                     # Card · Badge · Signal · StatCell · RiskBar
    common/                 # Stagger · PageHeader
  lib/
    cn.ts                   # clsx helper
    data/                   # suppliers · issues · pos · commits · bom · disruptions · kpis
  styles/
    globals.css             # mission-control theme + scanline / pulse_signal
```

## Routes

| Path             | Workspace             | Status         |
| ---------------- | --------------------- | -------------- |
| `/`              | Command Center        | Live (full)    |
| `/disruptions`   | Disruption Workspace  | Skeleton + data |
| `/suppliers`     | Supplier Network      | Skeleton + data |
| `/parts`         | Parts & Orders        | Skeleton + data |
| `/plan`          | Plan & Simulate       | Skeleton        |
| `/intelligence`  | AI Operations         | Skeleton + data |
| `/platform`      | Platform Settings     | Skeleton        |

## Design language

- Dark ink (`#05070C`) base, amber signal accent (`#F5A623`)
- Typography: Space Grotesk (display), Inter (body), JetBrains Mono (data)
- Custom utility classes: `.tactical` (glass card), `.scanline` (animated sweep), `.signal-dot` (pulsing amber)
