# Integria Studio - Site vitrine B2B

Site vitrine moderne pour une agence IA B2B, oriente conversion.
L objectif est de presenter des offres concretes (automatisation, chatbot, agent vocal), rassurer sur l integration avec les outils existants, et generer des demandes d audit.

## Stack technique

- Vite
- React
- TypeScript
- CSS natif (styles modulaires par section)

## Commandes utiles

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Structure rapide

```text
src/
  components/
    HeroSection.tsx
    OffersSection.tsx
    UseCasesSection.tsx
    MethodSection.tsx
    DemoSection.tsx
    FinalCtaSection.tsx
    SiteFooter.tsx
  data/
    siteContent.ts
  App.tsx
  App.css
  index.css
```

## Etat actuel

- V1 complete du site avec sections business principales.
- Formulaire de lead integre (fallback `mailto:`) pour conversion.
- CTA relies a la section formulaire avec attributs de tracking (`data-cta`, `data-form`).
- Section demo IA simplifiee pour eviter une ARIA trompeuse.

## Prochains axes possibles

- Connecter le formulaire a un backend (API, CRM, webhook).
- Ajouter analytics et suivi de conversion (events CTA + formulaire).
- Ajouter preuves commerciales (cas clients, KPIs, testimonials).
