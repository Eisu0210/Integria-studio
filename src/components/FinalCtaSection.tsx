import { useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

type LeadFormValues = {
  name: string
  email: string
  company: string
  message: string
}

const initialValues: LeadFormValues = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function buildMailtoHref(values: LeadFormValues) {
  const subject = encodeURIComponent('Demande d audit IA - Integria Studio')
  const body = encodeURIComponent(
    [
      'Bonjour Integria Studio,',
      '',
      'Je souhaite demander un audit.',
      '',
      `Nom: ${values.name}`,
      `Email pro: ${values.email}`,
      `Entreprise: ${values.company}`,
      '',
      'Besoin / message:',
      values.message,
    ].join('\n'),
  )

  return `mailto:contact@integria.studio?subject=${subject}&body=${body}`
}

export function FinalCtaSection() {
  const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT?.trim()
  const hasEndpoint = Boolean(endpoint)
  const [values, setValues] = useState<LeadFormValues>(initialValues)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [fallbackMailtoHref, setFallbackMailtoHref] = useState(buildMailtoHref(initialValues))

  const helpMessage = useMemo(
    () =>
      hasEndpoint
        ? 'Envoi connecte a un endpoint de collecte configure via VITE_LEAD_FORM_ENDPOINT.'
        : 'Aucun endpoint n est encore configure. Le bouton secondaire ouvre un email pre-rempli vers contact@integria.studio.',
    [hasEndpoint],
  )

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    setFallbackMailtoHref(buildMailtoHref(nextValues))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const mailtoHref = buildMailtoHref(values)
    setFallbackMailtoHref(mailtoHref)

    if (!hasEndpoint) {
      window.location.href = mailtoHref
      return
    }

    setSubmitState('submitting')
    setFeedbackMessage('')

    try {
      const payload = {
        name: values.name,
        email: values.email,
        company: values.company,
        message: values.message,
        source: 'integria-studio-website',
        submittedAt: new Date().toISOString(),
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitState('success')
      setFeedbackMessage(
        'Merci. Votre demande a bien ete envoyee, nous revenons vers vous rapidement.',
      )
      setValues(initialValues)
      setFallbackMailtoHref(buildMailtoHref(initialValues))
      form.reset()
    } catch {
      setSubmitState('error')
      setFeedbackMessage(
        'L envoi automatique n a pas abouti. Utilisez le lien email ci-dessous pour nous transmettre votre demande sans perdre les informations saisies.',
      )
    }
  }

  return (
    <section id="contact-form" className="content-section final-cta">
      <div className="cta-layout">
        <div className="cta-copy">
          <p className="overline">Passer a l action</p>
          <h2>Demandez un audit IA adapte a vos priorites business.</h2>
          <p>
            Decrivez rapidement votre contexte. Nous revenons vers vous avec un premier cadrage
            concret des opportunites d automatisation et d integration IA.
          </p>
          <ul>
            <li>Audit cible de vos flux prioritaires</li>
            <li>Recommandations actionnables sous 48h</li>
            <li>Vision claire du ROI attendu</li>
          </ul>
        </div>

        <form className="lead-form" onSubmit={handleSubmit} data-form="lead-audit">
          <div className="form-grid">
            <label htmlFor="lead-name">
              Nom
              <input
                id="lead-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={values.name}
                onChange={handleChange}
                data-form-field="name"
              />
            </label>

            <label htmlFor="lead-email">
              Email pro
              <input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange}
                data-form-field="email"
              />
            </label>

            <label htmlFor="lead-company">
              Entreprise
              <input
                id="lead-company"
                name="company"
                type="text"
                autoComplete="organization"
                required
                value={values.company}
                onChange={handleChange}
                data-form-field="company"
              />
            </label>
          </div>

          <label htmlFor="lead-message">
            Besoin / message
            <textarea
              id="lead-message"
              name="message"
              rows={4}
              required
              autoComplete="off"
              value={values.message}
              onChange={handleChange}
              data-form-field="message"
              placeholder="Ex: qualification des leads entrants, integration CRM, support 24/7..."
            />
          </label>

          <div className="form-actions">
            <button
              type="submit"
              className="button button-primary"
              data-cta="form-submit-audit"
              disabled={submitState === 'submitting'}
            >
              {submitState === 'submitting' ? 'Envoi en cours...' : 'Demander un audit'}
            </button>
            <a
              className="button button-ghost"
              href={fallbackMailtoHref}
              data-cta="form-mail-fallback"
            >
              Nous ecrire par email
            </a>
          </div>

          {feedbackMessage && (
            <p className={`form-feedback ${submitState === 'success' ? 'is-success' : 'is-error'}`}>
              {feedbackMessage}
            </p>
          )}

          <p className="form-note">{helpMessage}</p>
        </form>
      </div>
    </section>
  )
}
