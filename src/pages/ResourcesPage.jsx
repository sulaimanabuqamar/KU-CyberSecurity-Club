import { BookOpen, FileCheck2, Shield, Terminal } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import useContent from '../hooks/useContent'

const iconMap = {
  book: BookOpen,
  terminal: Terminal,
  file: FileCheck2,
  shield: Shield,
}

function ResourcesPage() {
  const { content } = useContent()
  const resources = content.resources

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
      <SectionHeading
        eyebrow={resources.eyebrow}
        title={resources.title}
        description={resources.description}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {resources.resources.map((resource) => {
          const Icon = iconMap[resource.icon] || Shield

          return (
            <article key={resource.title} className="panel">
              <Icon className="h-6 w-6 text-ku-gold-light" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {resource.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ku-cream/80">
                {resource.text}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-ku-gold-light hover:text-ku-cream"
              >
                Open resource
              </a>
            </article>
          )
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-ku-gold/20 bg-ku-navy-2/35 p-6">
        <h3 className="text-lg font-semibold text-white">
          {resources.comingSoonTitle}
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-ku-cream/80">
          {resources.comingSoonText}
        </p>
      </div>
    </section>
  )
}

export default ResourcesPage
