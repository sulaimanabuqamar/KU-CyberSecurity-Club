import { ShieldCheck, Trophy, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import SectionHeading from '../components/SectionHeading'
import useContent from '../hooks/useContent'

function getHighlightIcon(icon) {
  if (icon === 'shield') {
    return <ShieldCheck className="h-5 w-5 text-ku-gold-light" />
  }
  if (icon === 'trophy') {
    return <Trophy className="h-5 w-5 text-ku-gold-light" />
  }
  return <Users className="h-5 w-5 text-ku-gold-light" />
}

function HomePage() {
  const { content } = useContent()
  const home = content.home
  const events = content.events
  const currentTermEvents = events.allEvents.filter(
    (event) => event.termId === events.currentTermId,
  )

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ku-gold/25">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(183,151,97,0.12),_transparent_50%)]" />
        <div className="absolute -right-40 top-8 -z-10 h-[26rem] w-[26rem] rounded-full border border-ku-gold/15 bg-ku-gold/5 blur-[1px]" />
        <div className="absolute right-10 top-20 -z-10 h-64 w-64 rounded-full border border-ku-gold/20" />
        <div className="absolute right-24 top-34 -z-10 h-36 w-36 rounded-full border border-ku-gold/25" />

        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-ku-gold/40 bg-ku-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ku-gold-light">
              {home.badgeText}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {home.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ku-cream/85">
              {home.heroDescription}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ku-cream/70">
              {home.heroSideText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-ku-gold px-6 py-3 text-sm font-semibold text-ku-navy transition hover:bg-ku-gold-light"
              >
                {home.joinButtonText}
              </Link>
              <Link
                to="/events"
                className="rounded-full border border-ku-gold/40 px-6 py-3 text-sm font-semibold text-ku-cream transition hover:border-ku-gold hover:text-ku-gold-light"
              >
                {home.eventsButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
        <SectionHeading
          eyebrow={home.introEyebrow}
          title={home.introTitle}
          description={home.introDescription}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {home.highlights.map(({ title, icon }) => (
            <div key={title} className="panel flex items-center gap-3 py-4">
              {getHighlightIcon(icon)}
              <span className="text-sm font-medium text-ku-cream">{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ku-gold/20 bg-ku-navy-2/35">
        <div className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
          <SectionHeading
            eyebrow={home.upcomingEyebrow}
            title={home.upcomingTitle}
            description={home.upcomingDescription}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {currentTermEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
