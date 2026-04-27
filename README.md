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

## Configuration formulaire lead

Variable d environnement optionnelle:

```bash
VITE_LEAD_FORM_ENDPOINT=https://votre-endpoint.tld/leads
```

Si `VITE_LEAD_FORM_ENDPOINT` est configure, le formulaire envoie un `POST` JSON avec:

```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "message": "string",
  "source": "integria-studio-website",
  "submittedAt": "ISO-8601 datetime"
}
```

Comportement fallback:

- Sans endpoint configure: le bouton principal ouvre un email pre-rempli via `mailto:`.
- En cas d echec reseau: un message d erreur s affiche et le bouton secondaire permet d envoyer le meme contenu par email sans ressaisie.

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
