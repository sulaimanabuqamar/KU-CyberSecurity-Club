function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ku-gold-light">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-ku-cream/80">{description}</p>
    </div>
  )
}

export default SectionHeading
