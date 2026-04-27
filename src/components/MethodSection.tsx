import { integrationTools, methodSteps } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function MethodSection() {
  return (
    <section id="integration" className="content-section integration-layout">
      <div>
        <SectionHeading
          overline="Methode et integration"
          title="Une mise en place claire, compatible avec votre ecosysteme."
          description="Integria Studio s adapte a votre existant pour limiter la friction technique et maximiser l adoption metier."
        />

        <div className="steps-list">
          {methodSteps.map((step) => (
            <article key={step.title} className="step-item">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>

      <aside className="integration-panel">
        <h3>Comment ca s integre</h3>
        <p>
          Nous connectons les flux entre vos canaux d entree, vos outils de pilotage et vos
          equipes pour garantir une execution simple et robuste.
        </p>
        <div className="tool-tags">
          {integrationTools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <p className="integration-note">
          Connexions possibles via API, webhooks ou orchestration no-code/low-code selon vos
          contraintes SI.
        </p>
      </aside>
    </section>
  )
}
