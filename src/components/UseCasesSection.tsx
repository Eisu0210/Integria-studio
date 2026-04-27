import { useCases } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function UseCasesSection() {
  return (
    <section id="cas-usage" className="content-section use-cases-section">
      <div className="use-cases-intro">
        <SectionHeading
          overline="Univers des possibles"
          title="Des cas d usage precis, applicables a vos enjeux terrain."
          description="Nous deployons des systemes utiles, connectes a vos flux quotidiens, pour produire de la valeur des les premiers usages."
        />
        <p className="use-cases-note">
          Chaque cas d usage est pense pour etre relie a vos outils existants et active
          rapidement sans bouleverser vos operations.
        </p>
      </div>

      <div className="use-cases-list">
        {useCases.map((useCase, index) => (
          <article key={useCase} className="use-case-item">
            <span>{`0${index + 1}`}</span>
            <p>{useCase}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
