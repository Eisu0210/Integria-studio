import { useCases } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function UseCasesSection() {
  return (
    <section id="cas-usage" className="content-section use-cases-section">
      <div className="use-cases-intro">
        <SectionHeading
          overline="Univers des possibles"
          title="Des cas d’usage concrets, activables sur vos enjeux terrain."
          description="Nous déployons des systèmes utiles, connectés à vos flux quotidiens, pour produire de la valeur rapidement."
        />
        <p className="use-cases-note">
          Chaque cas d’usage est pensé pour s’intégrer à vos outils existants sans alourdir vos opérations.
        </p>
      </div>

      <div className="use-cases-list">
        {useCases.slice(0, 6).map((useCase, index) => (
          <article key={useCase} className="use-case-item">
            <span>{`0${index + 1}`}</span>
            <p>{useCase}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
