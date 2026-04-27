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
  { label: 'Intégration', href: '#integration' },
  { label: 'Démo IA', href: '#demo' },
]

export const offers: Offer[] = [
  {
    title: 'Automatisation IA pour PME',
    intro:
      'Automatisez les tâches répétitives pour accélérer les opérations et fiabiliser l’exécution.',
    problem:
      'Des tâches manuelles dispersent les équipes, ralentissent les réponses client et créent des pertes de suivi.',
    benefits: [
      'Gagnez plusieurs heures par semaine et par équipe',
      'Réduisez les erreurs de saisie et les oublis opérationnels',
      'Standardisez vos processus pour une exécution fiable',
    ],
    examples: [
      'Relances commerciales automatisées après devis',
      'Extraction de données et création de fiches CRM',
      'Routage intelligent vers le bon interlocuteur',
    ],
    integration:
      'Connecté à votre CRM, votre messagerie et vos outils internes via API ou webhooks.',
    cta: 'Étudier mon besoin',
  },
  {
    title: 'Chatbot IA site web / support / qualification',
    intro:
      'Transformez votre site en canal de conversion et de support 24/7, sans surcharge équipe.',
    problem:
      'Les visiteurs repartent sans réponse immédiate, les équipes support sont sollicitées sur des questions répétitives.',
    benefits: [
      'Améliorez le taux de conversion et la qualité des leads',
      'Assurez une disponibilité continue sans surcharge support',
      'Structurez les demandes avant intervention humaine',
    ],
    examples: [
      'FAQ dynamique et support de premier niveau',
      'Qualification automatique des prospects entrants',
      'Orientation vers prise de rendez-vous ou formulaire ciblé',
    ],
    integration:
      'Branché à votre site, à votre base documentaire, à l’agenda et au CRM.',
    cta: 'Demander une démo',
  },
  {
    title: 'Agent vocal IA rendez-vous / standard / qualification',
    intro:
      'Offrez un accueil téléphonique continu avec qualification automatique et routage intelligent.',
    problem:
      'Les appels manqués coûtent des opportunités, et le standard absorbe du temps à faible valeur.',
    benefits: [
      'Captez plus de demandes entrantes hors horaires',
      'Filtrez et qualifiez les appels avant escalade',
      'Augmentez la réactivité commerciale et la satisfaction client',
    ],
    examples: [
      'Prise de rendez-vous synchronisée avec l’agenda',
      'Standard IA avec identification du besoin',
      'Qualification des leads et création automatique dans le CRM',
    ],
    integration:
      'Interconnecté avec la téléphonie, l’agenda, le CRM et les workflows internes.',
    cta: 'Réserver un échange',
  },
]

export const useCases = [
  'Assistant mail intelligent pour accélérer les réponses',
  'Qualification automatique des leads entrants',
  'Chatbot FAQ et support client 24/7',
  'Standard téléphonique IA pour ne plus rater d’appels',
  'Relance commerciale automatisée selon vos cycles',
  'Routage intelligent des demandes par priorité',
  'Extraction et structuration de données opérationnelles',
  'Automatisations marketing et CRM orientées conversion',
]

export const integrationTools = [
  'CRM',
  'Email',
  'Site web',
  'Agenda',
  'Support',
  'Téléphone',
  'Outils internes',
  'API / webhooks / no-code / low-code',
]

export const methodSteps = [
  {
    title: '1. Cadrage business',
    text: 'Nous cadrons vos priorités, vos objectifs et vos indicateurs avant tout déploiement.',
  },
  {
    title: '2. Design du système',
    text: 'Nous concevons un flux IA adapté à vos contraintes métier et à votre organisation.',
  },
  {
    title: '3. Intégration progressive',
    text: 'Nous déployons sans rupture opérationnelle, avec tests, suivi et transfert des usages.',
  },
  {
    title: '4. Pilotage des résultats',
    text: 'Nous mesurons les gains réels et optimisons les scénarios pour maximiser la valeur.',
  },
]

export const demoScenarios: DemoScenario[] = [
  {
    id: 'support',
    title: 'Scénario support client',
    context: 'Chatbot IA connecté à votre base de connaissances et à votre outil support.',
    messages: [
      {
        role: 'client',
        text: 'Bonjour, je n’arrive pas à connecter mon compte entreprise.',
      },
      {
        role: 'assistant',
        text: 'Je vous aide tout de suite. Souhaitez-vous vérifier vos identifiants SSO ou réinitialiser l’accès ?',
      },
      {
        role: 'client',
        text: 'Vérifier le SSO, nous utilisons Microsoft 365.',
      },
      {
        role: 'assistant',
        text: 'Parfait. Je détecte une erreur de domaine. Je vous envoie la procédure corrigée et je crée un ticket si besoin.',
      },
    ],
    outcome:
      'Résultat : résolution en moins de 2 minutes et ticket préqualifié si escalade nécessaire.',
  },
  {
    id: 'lead',
    title: 'Scénario qualification lead',
    context: 'Assistant commercial connecté au site et au CRM.',
    messages: [
      {
        role: 'client',
        text: 'Je cherche une solution pour automatiser notre traitement de leads.',
      },
      {
        role: 'assistant',
        text: 'Très bien. Combien de leads qualifiez-vous par mois et quel CRM utilisez-vous actuellement ?',
      },
      {
        role: 'client',
        text: 'Environ 500 leads/mois, nous sommes sur HubSpot.',
      },
      {
        role: 'assistant',
        text: 'Merci. Je vous propose un audit ciblé et je peux vous réserver un échange de 30 minutes cette semaine.',
      },
    ],
    outcome:
      'Résultat : lead qualifié, enrichi et synchronisé dans le CRM avec proposition de rendez-vous.',
  },
  {
    id: 'voice',
    title: 'Scénario agent vocal',
    context: 'Standard vocal IA relié à l’agenda et au CRM.',
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
        text: 'Parfait. J’ai une disponibilité mardi à 14h30. Je confirme et j’envoie l’invitation ?',
      },
      {
        role: 'client',
        text: 'Oui, c est valide.',
      },
    ],
    outcome:
      'Résultat : rendez-vous confirmé, fiche contact créée et parcours client tracé automatiquement.',
  },
]
