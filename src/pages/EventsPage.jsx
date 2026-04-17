import { ChevronLeft, ChevronRight, Clock3, MapPin } from 'lucide-react'
import { useState } from 'react'
import EventCard from '../components/EventCard'
import SectionHeading from '../components/SectionHeading'
import useContent from '../hooks/useContent'

function EventsPage() {
  const { content } = useContent()
  const eventsData = content.events
  const terms = eventsData.terms
  const [activePeriodIndex, setActivePeriodIndex] = useState(0)
  const activeTerm = terms[activePeriodIndex] || null
  const activeTermEvents = eventsData.allEvents.filter(
    (event) => event.termId === activeTerm?.id,
  )
  const currentTermEvents = eventsData.allEvents.filter(
    (event) => event.termId === eventsData.currentTermId,
  )

  const showPrevious = () => {
    if (!terms.length) return
    setActivePeriodIndex((prev) =>
      prev === 0 ? terms.length - 1 : prev - 1,
    )
  }

  const showNext = () => {
    if (!terms.length) return
    setActivePeriodIndex((prev) =>
      prev === terms.length - 1 ? 0 : prev + 1,
    )
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
      <SectionHeading
        eyebrow={eventsData.eyebrow}
        title={eventsData.title}
        description={eventsData.description}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {currentTermEvents.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>

      <div className="mt-12 border-t border-ku-gold/20 pt-10">
        <SectionHeading
          eyebrow={eventsData.scheduleEyebrow}
          title={eventsData.scheduleTitle}
          description={eventsData.scheduleDescription}
        />

        <div className="mt-6 rounded-3xl border border-ku-gold/20 bg-ku-navy-2/35 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous term"
              className="inline-flex items-center gap-2 rounded-full border border-ku-gold/35 px-4 py-2 text-sm font-medium text-ku-cream transition hover:border-ku-gold hover:text-ku-gold-light"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-ku-gold-light">
                Selected Term
              </p>
              <p className="mt-1 text-xl font-semibold text-white">
                {activeTerm?.label || 'No term configured'}
              </p>
              <p className="text-sm text-ku-cream/75">
                {activeTerm?.subtitle || 'Add terms from admin dashboard'}
              </p>
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next term"
              className="inline-flex items-center gap-2 rounded-full border border-ku-gold/35 px-4 py-2 text-sm font-medium text-ku-cream transition hover:border-ku-gold hover:text-ku-gold-light"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {activeTermEvents.map((event) => (
              <article
                key={`${activeTerm?.id}-${event.id}`}
                className="rounded-2xl border border-ku-gold/20 bg-ku-navy/50 p-4"
              >
                <span className="inline-flex rounded-full bg-ku-gold/15 px-3 py-1 text-xs font-semibold text-ku-gold-light">
                  {event.tag}
                </span>
                <h4 className="mt-3 font-semibold text-white">{event.title}</h4>
                <p className="mt-2 text-sm font-medium text-ku-gold-light">
                  {event.date}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-ku-cream/80">
                  <Clock3 className="h-4 w-4 text-ku-gold-light" />
                  {event.time}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-ku-cream/80">
                  <MapPin className="h-4 w-4 text-ku-gold-light" />
                  {event.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsPage
