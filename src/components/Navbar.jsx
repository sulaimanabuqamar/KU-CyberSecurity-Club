import { NavLink } from 'react-router-dom'
import clubLogo from '../assets/club-logo.png'

function Navbar() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Events', to: '/events' },
    { label: 'Resource Zone', to: '/resources' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-ku-gold/20 bg-ku-navy/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={clubLogo}
            alt="Cybersecurity Club logo"
            className="h-11 w-11 rounded-full border border-ku-gold/25 object-cover"
          />
          <span className="text-sm font-semibold text-white md:text-base">
            KU Cybersecurity Club
          </span>
        </NavLink>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? 'text-ku-gold-light'
                    : 'text-ku-cream/85 hover:text-ku-gold-light'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
