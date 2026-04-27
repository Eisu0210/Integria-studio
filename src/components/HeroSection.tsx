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

      <div className="hero-content">
        <p className="overline">Agence IA B2B</p>
        <h1>Des systemes IA integres a vos operations, avec impact business mesurable.</h1>
        <p className="hero-description">
          Integria Studio concoit et deploie des automatisations, chatbots et agents vocaux
          utiles pour vos equipes. Notre approche est simple: eliminer les frictions
          operationnelles, augmenter la disponibilite et accelerer la conversion.
        </p>
        <div className="hero-cta">
          <a className="button button-primary" href="#contact-form" data-cta="hero-audit">
            Demander un audit
          </a>
          <a className="button button-ghost" href="#contact-form" data-cta="hero-exchange">
            Reserver un echange
          </a>
        </div>
      </div>

      <div className="hero-proof">
        <article>
          <p className="proof-value">-40%</p>
          <p className="proof-label">de temps sur les taches repetitives</p>
        </article>
        <article>
          <p className="proof-value">24/7</p>
          <p className="proof-label">disponibilite client via assistants IA</p>
        </article>
        <article>
          <p className="proof-value">+30%</p>
          <p className="proof-label">de leads qualifies exploitables en CRM</p>
        </article>
      </div>
    </header>
  )
}
