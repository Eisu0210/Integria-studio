import { integrationTools, methodSteps } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function MethodSection() {
  return (
    <section id="integration" className="content-section method-section">
      <div className="method-main">
        <SectionHeading
          overline="Méthode et intégration"
          title="Une mise en place claire, compatible avec votre écosystème."
          description="Integria Studio s’adapte à votre existant pour limiter la friction technique et accélérer l’adoption métier."
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
        <h3>Architecture d’intégration</h3>
        <div className="integration-schema">
          <div>
            <p>Entrées</p>
            <strong>Web, email, appels, support</strong>
          </div>
          <div>
            <p>Orchestration</p>
              <strong>API, webhooks, no-code, low-code</strong>
          </div>
          <div>
            <p>Sorties métier</p>
            <strong>CRM, agenda, opérations, reporting</strong>
          </div>
        </div>
        <p className="integration-copy">
          Nous connectons vos canaux d’entrée, vos outils de pilotage et vos équipes pour garantir une exécution simple et robuste.
        </p>
        <div className="tool-tags">
          {integrationTools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <p className="integration-note">
          Connexions possibles via API, webhooks ou orchestration no-code/low-code selon vos contraintes SI.
        </p>
      </aside>
    </section>
  )
}
