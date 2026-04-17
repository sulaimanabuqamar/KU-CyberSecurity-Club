import { Clock3, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import useContent from '../hooks/useContent'

function ContactPage() {
  const { content } = useContent()
  const contact = content.contact

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="panel">
          <SectionHeading
            eyebrow={contact.joinEyebrow}
            title={contact.joinTitle}
            description={contact.joinDescription}
          />
          <ul className="mt-6 space-y-3 text-sm text-ku-cream/85">
            {contact.joinBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href={contact.joinLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full bg-ku-gold px-6 py-3 text-sm font-semibold text-ku-navy transition hover:bg-ku-gold-light"
          >
            {contact.joinButtonText}
          </a>
        </div>

        <div className="panel">
          <h3 className="text-2xl font-semibold text-white">{contact.contactTitle}</h3>
          <p className="mt-3 text-sm text-ku-cream/80">
            {contact.contactDescription}
          </p>
          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Full name" className="input-field" />
            <input
              type="email"
              placeholder="KU email address"
              className="input-field"
            />
            <textarea
              rows={4}
              placeholder="Your message"
              className="input-field resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-ku-gold px-5 py-3 text-sm font-semibold text-ku-navy transition hover:bg-ku-gold-light"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 space-y-2 text-sm text-ku-cream/80">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-ku-gold-light" />
              {contact.email}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ku-gold-light" />
              {contact.location}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-ku-gold-light" />
              {contact.officeHours}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
