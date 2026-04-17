import { Clock3, MapPin } from 'lucide-react'

function EventCard({ event }) {
  return (
    <article className="panel hover:-translate-y-0.5">
      <span className="inline-flex rounded-full bg-ku-gold/15 px-3 py-1 text-xs font-semibold text-ku-gold-light">
        {event.tag}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{event.title}</h3>
      <p className="mt-2 text-sm font-medium text-ku-gold-light">{event.date}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-ku-cream/80">
        <Clock3 className="h-4 w-4 text-ku-gold-light" />
        {event.time}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-ku-cream/80">
        <MapPin className="h-4 w-4 text-ku-gold-light" />
        {event.location}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ku-cream/80">
        {event.description}
      </p>
    </article>
  )
}

export default EventCard
