import { Globe, Mail, Send } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import useContent from '../hooks/useContent'

function Footer() {
  const { content } = useContent()
  const footer = content.footer

  return (
    <footer className="border-t border-ku-gold/20 bg-ku-navy-2/35">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-sm font-semibold text-white">{footer.brandName}</p>
          <p className="mt-1 text-xs text-ku-cream/70">{footer.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-ku-cream/85">
          {footer.links.map((link) => (
            <NavLink
              key={`${link.label}-${link.to}`}
              to={link.to}
              className="transition hover:text-ku-gold-light"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${footer.socials.email}`}
            className="rounded-full border border-ku-gold/35 p-2 text-ku-gold-light transition hover:bg-ku-gold/10"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={footer.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ku-gold/35 p-2 text-ku-gold-light transition hover:bg-ku-gold/10"
            aria-label="LinkedIn"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href={footer.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ku-gold/35 p-2 text-ku-gold-light transition hover:bg-ku-gold/10"
            aria-label="Instagram"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
