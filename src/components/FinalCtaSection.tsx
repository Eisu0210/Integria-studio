export function FinalCtaSection() {
  return (
    <section id="contact-form" className="content-section final-cta">
      <p className="overline">Passer a l action</p>
      <h2>Demandez un audit IA adapte a vos priorites business.</h2>
      <p>
        Decrivez rapidement votre contexte. Nous revenons vers vous avec un premier cadrage
        concret des opportunites d automatisation et d integration IA.
      </p>

      <form
        className="lead-form"
        action="mailto:contact@integria.studio"
        method="post"
        encType="text/plain"
        data-form="lead-audit"
      >
        <div className="form-grid">
          <label htmlFor="lead-name">
            Nom
            <input id="lead-name" name="nom" type="text" required data-form-field="nom" />
          </label>

          <label htmlFor="lead-email">
            Email pro
            <input
              id="lead-email"
              name="email-pro"
              type="email"
              autoComplete="email"
              required
              data-form-field="email-pro"
            />
          </label>

          <label htmlFor="lead-company">
            Entreprise
            <input
              id="lead-company"
              name="entreprise"
              type="text"
              autoComplete="organization"
              required
              data-form-field="entreprise"
            />
          </label>
        </div>

        <label htmlFor="lead-message">
          Besoin / message
          <textarea
            id="lead-message"
            name="besoin-message"
            rows={4}
            required
            data-form-field="besoin-message"
            placeholder="Ex: qualification des leads entrants, integration CRM, support 24/7..."
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="button button-primary" data-cta="form-submit-audit">
            Demander un audit
          </button>
          <a className="button button-ghost" href="mailto:contact@integria.studio" data-cta="form-mail-fallback">
            Reserver un echange
          </a>
        </div>
        <p className="form-note">
          Sans backend pour cette V1: l envoi utilise votre client email en fallback via mailto.
        </p>
      </form>
    </section>
  )
}
