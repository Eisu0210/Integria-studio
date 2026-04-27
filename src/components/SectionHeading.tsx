type SectionHeadingProps = {
  overline: string
  title: string
  description: string
}

export function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="overline">{overline}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </header>
  )
}
