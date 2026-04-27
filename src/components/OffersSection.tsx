import { offers } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function OffersSection() {
  return (
    <section id="offres" className="content-section offers-section">
      <SectionHeading
        overline="Offres"
        title="Trois leviers IA concrets pour accelerer vos performances."
        description="Chaque offre est pensee pour un usage metier clair, une integration rapide et un resultat visible."
      />

      <div className="offers-grid">
        {offers.map((offer, index) => (
          <article key={offer.title} className="offer-card">
            <div className="offer-head">
              <span className="offer-index">{`0${index + 1}`}</span>
              <h3>{offer.title}</h3>
            </div>
            <p className="offer-intro">{offer.intro}</p>

            <div className="offer-details">
              <div>
                <h4>Probleme resolu</h4>
                <p>{offer.problem}</p>
              </div>

              <div>
                <h4>Benefices business</h4>
                <ul>
                  {offer.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Exemples d usage</h4>
                <ul>
                  {offer.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Logique d integration</h4>
                <p>{offer.integration}</p>
              </div>
            </div>

            <div className="offer-footer">
              <a className="text-link" href="#contact-form" data-cta={`offer-card-${index + 1}`}>
                {offer.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
