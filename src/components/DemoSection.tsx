import { useMemo, useState } from 'react'
import { demoScenarios } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function DemoSection() {
  const [activeScenarioId, setActiveScenarioId] = useState(demoScenarios[0].id)

  const activeScenario = useMemo(
    () => demoScenarios.find((scenario) => scenario.id === activeScenarioId) ?? demoScenarios[0],
    [activeScenarioId],
  )

  return (
    <section id="demo" className="content-section demo-section">
      <SectionHeading
        overline="Demo IA integree"
        title="Visualisez une interaction utile, exploitable et connectee."
        description="Cette demonstration simule des scenarios realistes de qualification, support et prise de rendez-vous."
      />

      <div className="demo-shell">
        <div className="demo-head">
          <p>Simulation operationnelle</p>
          <span>Flux assiste par IA et connecte au SI</span>
        </div>
        <div className="demo-tabs" aria-label="Scenarios de demonstration">
          {demoScenarios.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              aria-pressed={activeScenarioId === scenario.id}
              className={activeScenarioId === scenario.id ? 'is-active' : ''}
              onClick={() => setActiveScenarioId(scenario.id)}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        <article className="demo-panel">
          <p className="demo-context">{activeScenario.context}</p>

          <div className="demo-messages">
            {activeScenario.messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={message.role === 'assistant' ? 'message assistant' : 'message client'}
              >
                <span>{message.role === 'assistant' ? 'Assistant IA' : 'Client'}</span>
                {message.text}
              </p>
            ))}
          </div>

          <p className="demo-outcome">{activeScenario.outcome}</p>
        </article>
      </div>
    </section>
  )
}
