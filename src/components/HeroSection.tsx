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
            L’IA utile, intégrée à vos opérations.
            <span> Pas des promesses, des résultats mesurables.</span>
          </h1>
          <p className="hero-description">
            Integria Studio déploie l’automatisation, les chatbots et les agents vocaux
            avec une approche orientée exécution et performance business.
          </p>
          <div className="hero-cta">
            <a className="button button-primary" href="#contact-form" data-cta="hero-audit">
              Demander un audit
            </a>
            <a className="button button-ghost" href="#contact-form" data-cta="hero-exchange">
              Réserver un échange
            </a>
          </div>
          <dl className="hero-metrics">
            <div>
              <dt>Temps gagné</dt>
              <dd>-40%</dd>
            </div>
            <div>
              <dt>Disponibilité</dt>
              <dd>24/7</dd>
            </div>
            <div>
              <dt>Leads qualifiés</dt>
              <dd>+30%</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-visual" aria-label="Système IA intégré">
          <div className="visual-head">
            <p className="visual-title">Système d’orchestration Integria</p>
            <span>Architecture type de déploiement</span>
          </div>
          <div className="orchestration-grid">
            <article>
              <p>Entrées</p>
              <strong>Site, email, appels, support</strong>
            </article>
            <article>
              <p>Intelligence</p>
              <strong>Qualification, tri, priorisation</strong>
            </article>
            <article>
              <p>Exécution</p>
              <strong>Actions CRM, agenda, support</strong>
            </article>
            <article>
              <p>Pilotage</p>
              <strong>Suivi KPI, optimisation continue</strong>
            </article>
          </div>
          <div className="orchestration-rail" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </aside>
      </div>
    </header>
  )
}
