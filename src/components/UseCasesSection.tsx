import { useCases } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function UseCasesSection() {
  return (
    <section id="cas-usage" className="content-section">
      <SectionHeading
        overline="Univers des possibles"
        title="Des cas d usage precis, applicables a vos enjeux terrain."
        description="Nous deployons des systemes utiles, connectes a vos flux quotidiens, pour produire de la valeur des les premiers usages."
      />

      <div className="use-cases-grid">
        {useCases.map((useCase) => (
          <article key={useCase} className="use-case-item">
            <p>{useCase}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
