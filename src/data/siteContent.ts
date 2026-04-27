export type Offer = {
  title: string
  intro: string
  problem: string
  benefits: string[]
  examples: string[]
  integration: string
  cta: string
}

export type DemoScenario = {
  id: string
  title: string
  context: string
  messages: { role: 'assistant' | 'client'; text: string }[]
  outcome: string
}

export const navigation = [
  { label: 'Offres', href: '#offres' },
  { label: "Cas d'usage", href: '#cas-usage' },
  { label: 'Integration', href: '#integration' },
  { label: 'Demo IA', href: '#demo' },
]

export const offers: Offer[] = [
  {
    title: 'Automatisation IA pour PME',
    intro:
      'Industrialisez les operations repetitives pour liberer vos equipes et accelerer les cycles commerciaux.',
    problem:
      'Des taches manuelles dispersent les equipes, ralentissent les reponses client et creent des pertes de suivi.',
    benefits: [
      'Gagnez jusqu a plusieurs heures par semaine et par equipe',
      'Reduisez les erreurs de saisie et les oublis operationnels',
      'Standardisez les processus pour une execution fiable',
    ],
    examples: [
      'Relances commerciales automatisees apres devis',
      'Extraction de donnees et creation automatique de fiches CRM',
      'Routage intelligent des demandes vers le bon interlocuteur',
    ],
    integration:
      'Connecte aux outils CRM, email, support et aux applications internes via API, webhooks ou no-code/low-code.',
    cta: 'Etudier mon besoin',
  },
  {
    title: 'Chatbot IA site web / support / qualification',
    intro:
      'Transformez votre site en canal de conversion et de support 24/7 avec un assistant utile et oriente business.',
    problem:
      'Les visiteurs repartent sans reponse immediate, les equipes support sont sollicitees sur des questions repetitives.',
    benefits: [
      'Ameliorez le taux de conversion et la qualite des leads',
      'Assurez une disponibilite continue sans surcharge des equipes',
      'Structurez les demandes avant intervention humaine',
    ],
    examples: [
      'FAQ dynamique et support client de premier niveau',
      'Qualification automatique des prospects entrants',
      'Orientation vers prise de rendez-vous ou formulaire cible',
    ],
    integration:
      'Branche a votre site, base de connaissances, agenda et CRM pour transmettre des informations exploitables.',
    cta: 'Demander une demo',
  },
  {
    title: 'Agent vocal IA rendez-vous / standard / qualification',
    intro:
      'Offrez un accueil telephonique continu et professionnel, avec qualification automatique et transfert intelligent.',
    problem:
      'Les appels manques coutent des opportunites, et le standard absorbe du temps a faible valeur.',
    benefits: [
      'Captez davantage de demandes entrantes hors horaires',
      'Filtrez et qualifiez les appels avant escalation',
      'Augmentez la reactivite commerciale et la satisfaction client',
    ],
    examples: [
      'Prise de rendez-vous synchronisee avec agenda equipe',
      'Standard telephonique IA avec identification du besoin',
      'Qualification des leads et creation automatique dans le CRM',
    ],
    integration:
      'Interconnecte avec telephonie, agenda, CRM et workflows internes pour un parcours fluide de bout en bout.',
    cta: 'Reserver un echange',
  },
]

export const useCases = [
  'Assistant mail intelligent pour accelerer les reponses',
  'Qualification automatique des leads entrants',
  'Chatbot FAQ et support client 24/7',
  'Standard telephonique IA pour ne plus rater d appels',
  'Relance commerciale automatisee selon vos cycles',
  'Routage intelligent des demandes par priorite',
  'Extraction et structuration de donnees operationnelles',
  'Automatisations marketing et CRM orientees conversion',
]

export const integrationTools = [
  'CRM',
  'Email',
  'Site web',
  'Agenda',
  'Support',
  'Telephone',
  'Outils internes',
  'API / webhooks / no-code / low-code',
]

export const methodSteps = [
  {
    title: '1. Cadrage business',
    text: 'Nous clarifions objectifs, priorites et indicateurs de performance avant toute implementation.',
  },
  {
    title: '2. Design du systeme',
    text: 'Nous concevons le flux IA adapte a vos contraintes metier, vos equipes et vos outils existants.',
  },
  {
    title: '3. Integration progressive',
    text: 'Nous deploiyons sans rupture operationnelle, avec tests, suivi et transfert de bonnes pratiques.',
  },
  {
    title: '4. Pilotage des resultats',
    text: 'Nous mesurons les gains reels et optimisons les scenarios pour maximiser la valeur business.',
  },
]

export const demoScenarios: DemoScenario[] = [
  {
    id: 'support',
    title: 'Scenario support client',
    context: 'Chatbot IA connecte a la base de connaissances et a votre outil support.',
    messages: [
      {
        role: 'client',
        text: 'Bonjour, je n arrive pas a connecter mon compte entreprise.',
      },
      {
        role: 'assistant',
        text: 'Je vous aide tout de suite. Souhaitez-vous verifier vos identifiants SSO ou reinitialiser l acces ?',
      },
      {
        role: 'client',
        text: 'Verifier le SSO, nous utilisons Microsoft 365.',
      },
      {
        role: 'assistant',
        text: 'Parfait. Je detecte une erreur de domaine. Je vous envoie la procedure corrigee et je cree un ticket si besoin.',
      },
    ],
    outcome:
      'Resultat: resolution en moins de 2 minutes et ticket pre-qualifie si escalade necessaire.',
  },
  {
    id: 'lead',
    title: 'Scenario qualification lead',
    context: 'Assistant commercial connecte au site et au CRM.',
    messages: [
      {
        role: 'client',
        text: 'Je cherche une solution pour automatiser notre traitement de leads.',
      },
      {
        role: 'assistant',
        text: 'Tres bien. Combien de leads qualifiez-vous par mois et quel CRM utilisez-vous actuellement ?',
      },
      {
        role: 'client',
        text: 'Environ 500 leads/mois, nous sommes sur HubSpot.',
      },
      {
        role: 'assistant',
        text: 'Merci. Je vous propose un audit cible et je peux vous reserver un echange de 30 minutes cette semaine.',
      },
    ],
    outcome:
      'Resultat: lead qualifie, enrichi et synchronise dans le CRM avec proposition de rendez-vous.',
  },
  {
    id: 'voice',
    title: 'Scenario agent vocal',
    context: 'Standard vocal IA relie a l agenda et au CRM.',
    messages: [
      {
        role: 'assistant',
        text: 'Integria Studio, bonjour. Souhaitez-vous planifier un rendez-vous ou parler au support ?',
      },
      {
        role: 'client',
        text: 'Je veux planifier un rendez-vous commercial.',
      },
      {
        role: 'assistant',
        text: 'Parfait. J ai une disponibilite mardi a 14h30. Je confirme et j envoie l invitation ?',
      },
      {
        role: 'client',
        text: 'Oui, c est valide.',
      },
    ],
    outcome:
      'Resultat: rendez-vous confirme, fiche contact creee et parcours client trace automatiquement.',
  },
]
