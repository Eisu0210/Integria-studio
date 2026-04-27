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
            L IA utile, integree a vos operations.
            <span> Pas des promesses, des resultats mesurables.</span>
          </h1>
          <p className="hero-description">
            Integria Studio accompagne les entreprises sur l automatisation, le chatbot et
            l agent vocal avec une approche deploiement-orientee business.
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
          <div className="visual-head">
            <p className="visual-title">Systeme d orchestration Integria</p>
            <span>Architecture type de deploiement</span>
          </div>
          <div className="orchestration-grid">
            <article>
              <p>Entrees</p>
              <strong>Site, email, appels, support</strong>
            </article>
            <article>
              <p>Intelligence</p>
              <strong>Qualification, tri, priorisation</strong>
            </article>
            <article>
              <p>Execution</p>
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
