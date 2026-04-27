import { navigation } from '../data/siteContent'

export function HeroSection() {
  return (
    <header className="hero-section">
      <div className="top-bar">
        <p className="brand">Integria Studio</p>
        <nav aria-label="Navigation principale">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="button button-secondary" href="#contact-form" data-cta="header-audit">
          Recevoir un audit
        </a>
      </div>

      <div className="hero-stage">
        <div className="hero-content">
          <p className="overline">Agence IA B2B</p>
          <h1>
            Orchestrer l IA dans vos operations,
            <span> avec precision, vitesse et impact commercial.</span>
          </h1>
          <p className="hero-description">
            Integria Studio structure, integre et deploie des systemes IA utiles pour vos equipes:
            automatisations metier, chatbot de conversion et agent vocal operationnel.
          </p>
          <div className="hero-cta">
            <a className="button button-primary" href="#contact-form" data-cta="hero-audit">
              Demander un audit
            </a>
            <a className="button button-ghost" href="#contact-form" data-cta="hero-exchange">
              Reserver un echange
            </a>
          </div>
          <dl className="hero-metrics">
            <div>
              <dt>Temps gagne</dt>
              <dd>-40%</dd>
            </div>
            <div>
              <dt>Disponibilite</dt>
              <dd>24/7</dd>
            </div>
            <div>
              <dt>Leads qualifies</dt>
              <dd>+30%</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-visual" aria-label="Systeme IA integre">
          <p className="visual-title">Systeme IA integre a vos flux</p>
          <div className="orchestration-board">
            <article className="node node-entry">
              <h3>Canaux entrants</h3>
              <p>Site web, email, telephone, support</p>
            </article>
            <article className="node node-core">
              <h3>Noyau Integria</h3>
              <p>Qualification, orchestration et routage intelligent</p>
            </article>
            <article className="node node-output">
              <h3>Actions metier</h3>
              <p>CRM a jour, rendez-vous planifies, support priorise</p>
            </article>
            <article className="node node-pilotage">
              <h3>Pilotage business</h3>
              <p>Indicateurs de performance et optimisation continue</p>
            </article>
            <span className="flow flow-a" aria-hidden="true"></span>
            <span className="flow flow-b" aria-hidden="true"></span>
            <span className="flow flow-c" aria-hidden="true"></span>
          </div>
        </aside>
      </div>
    </header>
  )
}
