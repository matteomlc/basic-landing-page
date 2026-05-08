# Basic Landing Page

Landing page / portfolio personale costruita con React, TypeScript e Vite. Il sito presenta sezioni per presentazione, esperienze lavorative, formazione e contatti.

## Tecnologie

| Categoria | Tecnologia |
|---|---|
| Framework | [React 19](https://react.dev) |
| Linguaggio | [TypeScript 6](https://www.typescriptlang.org) |
| Build tool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Componenti UI | [shadcn/ui](https://ui.shadcn.com) (stile base-nova) |
| Icone | [Lucide React](https://lucide.dev) |
| Animazioni | [Motion](https://motion.dev) |
| Font | Playfair Display (titoli), Source Sans 3 (corpo), Geist |
| Package manager | [pnpm](https://pnpm.io) |
| Linting | [ESLint](https://eslint.org) con regole TypeScript e React |

## Struttura del progetto

```
src/
├── main.tsx              # Entry point React (StrictMode + render in #root)
├── App.tsx               # Componente root, compone tutte le sezioni
├── index.css             # Stili globali, tema chiaro/scuro (OKLCH), import font
├── components/
│   ├── Header.tsx        # Navbar sticky con link di navigazione e menu mobile
│   ├── Hero.tsx          # Sezione hero full-viewport con CTA e freccia animata
│   ├── About.tsx         # Sezione "Chi sono" con bio e griglia di skill
│   ├── Experience.tsx    # Sezione "Esperienze" con card per ogni ruolo lavorativo
│   ├── Education.tsx     # Sezione "Formazione" con card per titoli di studio
│   ├── Contact.tsx       # Sezione contatti con info e form (nome, email, messaggio)
│   ├── Footer.tsx        # Footer con branding, link social e copyright
│   └── ui/               # Componenti UI riutilizzabili (shadcn/ui)
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       └── textarea.tsx
└── lib/
    └── utils.ts          # Utility (cn per merge classi Tailwind)
```

## Script disponibili

```bash
pnpm dev       # Avvia il server di sviluppo con HMR
pnpm build     # Type-check + build di produzione
pnpm preview   # Anteprima della build di produzione
pnpm lint      # Esegue ESLint sul progetto
```

## Configurazione

- **Path alias**: `@` → `./src` (configurato in `vite.config.ts` e `tsconfig.app.json`)
- **Tema**: supporto chiaro/scuro tramite variabili CSS custom (OKLCH) in `index.css`
- **shadcn/ui**: configurato tramite `components.json` con stile base-nova e Tailwind CSS variables
