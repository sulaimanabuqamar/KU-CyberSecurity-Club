import { LogOut, Plus, Save, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import useContent from '../hooks/useContent'

const ADMIN_SESSION_KEY = 'ku-cyber-admin-auth'
const ADMIN_PASSCODE = 'ku-cyber-admin'

const SECTIONS = [
  { id: 'overview', label: 'Dashboard Overview' },
  { id: 'home', label: 'Homepage Content' },
  { id: 'about', label: 'About Page' },
  { id: 'events', label: 'Events' },
  { id: 'schedule', label: 'Calendar / Schedule' },
  { id: 'leadership', label: 'Leadership Team' },
  { id: 'resources', label: 'Resource Zone' },
  { id: 'contact', label: 'Contact Info' },
  { id: 'footer', label: 'Footer / Social Links' },
]

function Input({ label, value, onChange }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm text-ku-cream/85">{label}</span>
      <input className="input-field" value={value} onChange={onChange} />
    </label>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm text-ku-cream/85">{label}</span>
      <select className="input-field" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function Area({ label, value, onChange }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm text-ku-cream/85">{label}</span>
      <textarea className="input-field resize-y" rows={3} value={value} onChange={onChange} />
    </label>
  )
}

function Box({ title, children }) {
  return (
    <section className="panel">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}

function AdminPage() {
  const { content, setContent, saveContent, resetContent, lastSavedAt } = useContent()
  const [active, setActive] = useState('overview')
  const [passcode, setPasscode] = useState('')
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true',
  )

  const stats = useMemo(
    () => [
      {
        label: 'Current Term Events',
        value: content.events.allEvents.filter(
          (event) => event.termId === content.events.currentTermId,
        ).length,
      },
      { label: 'Schedule Terms', value: content.events.terms.length },
      { label: 'Team Members', value: content.about.teamMembers.length },
      { label: 'Resources', value: content.resources.resources.length },
    ],
    [content],
  )

  const patch = (key, fn) => setContent((prev) => ({ ...prev, [key]: fn(prev[key]) }))
  const termOptions = content.events.terms.map((term) => ({
    value: term.id,
    label: term.label,
  }))

  if (!authed) {
    return (
      <section className="mx-auto w-full max-w-xl px-6 py-18 md:px-10">
        <div className="panel">
          <h1 className="text-3xl font-bold text-white">Admin Access</h1>
          <form
            className="mt-4 space-y-4"
            onSubmit={(event) => {
              event.preventDefault()
              if (passcode !== ADMIN_PASSCODE) return
              sessionStorage.setItem(ADMIN_SESSION_KEY, 'true')
              setAuthed(true)
            }}
          >
            <Input label="Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
            <button className="w-full rounded-full bg-ku-gold px-5 py-3 text-sm font-semibold text-ku-navy">
              Enter Dashboard
            </button>
          </form>
        </div>
      </section>
    )
  }

  const views = {
    overview: (
      <Box title="Dashboard Overview">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-ku-gold/20 bg-ku-navy-2/35 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-ku-gold-light">{s.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{s.value}</p>
            </div>
          ))}
        </div>
      </Box>
    ),
    home: (
      <Box title="Homepage Content">
        <Input
          label="Hero title"
          value={content.home.heroTitle}
          onChange={(e) => patch('home', (v) => ({ ...v, heroTitle: e.target.value }))}
        />
        <Area
          label="Hero description"
          value={content.home.heroDescription}
          onChange={(e) => patch('home', (v) => ({ ...v, heroDescription: e.target.value }))}
        />
      </Box>
    ),
    about: (
      <Box title="About Page">
        <Area
          label="Mission"
          value={content.about.missionText}
          onChange={(e) => patch('about', (v) => ({ ...v, missionText: e.target.value }))}
        />
        <Area
          label="Vision"
          value={content.about.visionText}
          onChange={(e) => patch('about', (v) => ({ ...v, visionText: e.target.value }))}
        />
      </Box>
    ),
    events: (
      <Box title="Events">
        {content.events.allEvents.map((item, i) => (
          <div key={i} className="rounded-xl border border-ku-gold/20 p-3">
            <Input
              label="Event title"
              value={item.title}
              onChange={(e) =>
                patch('events', (v) => {
                  const allEvents = [...v.allEvents]
                  allEvents[i] = { ...item, title: e.target.value }
                  return { ...v, allEvents }
                })
              }
            />
            <Select
              label="Assigned term"
              value={item.termId}
              onChange={(e) =>
                patch('events', (v) => {
                  const allEvents = [...v.allEvents]
                  allEvents[i] = { ...item, termId: e.target.value }
                  return { ...v, allEvents }
                })
              }
              options={termOptions}
            />
            <Input
              label="Event type/category"
              value={item.tag}
              onChange={(e) =>
                patch('events', (v) => {
                  const allEvents = [...v.allEvents]
                  allEvents[i] = { ...item, tag: e.target.value }
                  return { ...v, allEvents }
                })
              }
            />
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                label="Date"
                value={item.date}
                onChange={(e) =>
                  patch('events', (v) => {
                    const allEvents = [...v.allEvents]
                    allEvents[i] = { ...item, date: e.target.value }
                    return { ...v, allEvents }
                  })
                }
              />
              <Input
                label="Time"
                value={item.time}
                onChange={(e) =>
                  patch('events', (v) => {
                    const allEvents = [...v.allEvents]
                    allEvents[i] = { ...item, time: e.target.value }
                    return { ...v, allEvents }
                  })
                }
              />
            </div>
            <Input
              label="Location"
              value={item.location}
              onChange={(e) =>
                patch('events', (v) => {
                  const allEvents = [...v.allEvents]
                  allEvents[i] = { ...item, location: e.target.value }
                  return { ...v, allEvents }
                })
              }
            />
            <Area
              label="Description"
              value={item.description}
              onChange={(e) =>
                patch('events', (v) => {
                  const allEvents = [...v.allEvents]
                  allEvents[i] = { ...item, description: e.target.value }
                  return { ...v, allEvents }
                })
              }
            />
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-red-300"
              onClick={() =>
                patch('events', (v) => ({
                  ...v,
                  allEvents: v.allEvents.filter((_, idx) => idx !== i),
                }))
              }
            >
              <Trash2 className="h-3.5 w-3.5" />
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-ku-gold/40 px-4 py-2 text-sm"
          onClick={() =>
            patch('events', (v) => ({
              ...v,
              allEvents: [
                ...v.allEvents,
                {
                  id: `event-${Date.now()}`,
                  termId: v.currentTermId || v.terms[0]?.id || '',
                  title: 'New Event',
                  date: '',
                  time: '',
                  location: '',
                  description: '',
                  tag: 'Workshop',
                },
              ],
            }))
          }
        >
          <Plus className="h-4 w-4" />
          Add event
        </button>
      </Box>
    ),
    schedule: (
      <Box title="Calendar / Schedule">
        <Select
          label="Current semester for top upcoming events"
          value={content.events.currentTermId}
          onChange={(e) =>
            patch('events', (v) => ({
              ...v,
              currentTermId: e.target.value,
            }))
          }
          options={termOptions}
        />
        {content.events.terms.map((term, i) => (
          <div key={i} className="rounded-xl border border-ku-gold/20 p-3">
            <Input
              label="Term name"
              value={term.label}
              onChange={(e) =>
                patch('events', (v) => {
                  const terms = [...v.terms]
                  terms[i] = { ...term, label: e.target.value }
                  return { ...v, terms }
                })
              }
            />
            <Input
              label="Subtitle"
              value={term.subtitle}
              onChange={(e) =>
                patch('events', (v) => {
                  const terms = [...v.terms]
                  terms[i] = { ...term, subtitle: e.target.value }
                  return { ...v, terms }
                })
              }
            />
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-full border border-ku-gold/35 px-3 py-1 text-xs text-ku-cream"
                onClick={() =>
                  patch('events', (v) => ({
                    ...v,
                    currentTermId: term.id,
                  }))
                }
              >
                Mark as current semester
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-xs text-red-300"
                onClick={() =>
                  patch('events', (v) => {
                    const terms = v.terms.filter((_, idx) => idx !== i)
                    const currentTermId =
                      v.currentTermId === term.id ? terms[0]?.id || '' : v.currentTermId
                    const allEvents = v.allEvents.map((event) =>
                      event.termId === term.id ? { ...event, termId: '' } : event,
                    )
                    return { ...v, terms, currentTermId, allEvents }
                  })
                }
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete term
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-ku-gold/40 px-4 py-2 text-sm"
          onClick={() =>
            patch('events', (v) => ({
              ...v,
              terms: [
                ...v.terms,
                { id: `term-${Date.now()}`, label: 'New Semester', subtitle: '' },
              ],
            }))
          }
        >
          <Plus className="h-4 w-4" />
          Add semester
        </button>
      </Box>
    ),
    leadership: (
      <Box title="Leadership Team">
        {content.about.teamMembers.map((m, i) => (
          <div key={i} className="rounded-xl border border-ku-gold/20 p-3">
            <Input
              label="Name"
              value={m.name}
              onChange={(e) =>
                patch('about', (v) => {
                  const teamMembers = [...v.teamMembers]
                  teamMembers[i] = { ...m, name: e.target.value }
                  return { ...v, teamMembers }
                })
              }
            />
          </div>
        ))}
      </Box>
    ),
    resources: (
      <Box title="Resource Zone">
        {content.resources.resources.map((r, i) => (
          <div key={i} className="rounded-xl border border-ku-gold/20 p-3">
            <Input
              label="Title"
              value={r.title}
              onChange={(e) =>
                patch('resources', (v) => {
                  const resources = [...v.resources]
                  resources[i] = { ...r, title: e.target.value }
                  return { ...v, resources }
                })
              }
            />
          </div>
        ))}
      </Box>
    ),
    contact: (
      <Box title="Contact Info">
        <Input
          label="Email"
          value={content.contact.email}
          onChange={(e) => patch('contact', (v) => ({ ...v, email: e.target.value }))}
        />
        <Input
          label="Join Link"
          value={content.contact.joinLink}
          onChange={(e) => patch('contact', (v) => ({ ...v, joinLink: e.target.value }))}
        />
      </Box>
    ),
    footer: (
      <Box title="Footer / Social Links">
        <Input
          label="Brand Name"
          value={content.footer.brandName}
          onChange={(e) => patch('footer', (v) => ({ ...v, brandName: e.target.value }))}
        />
        <Input
          label="LinkedIn"
          value={content.footer.socials.linkedin}
          onChange={(e) =>
            patch('footer', (v) => ({
              ...v,
              socials: { ...v.socials, linkedin: e.target.value },
            }))
          }
        />
      </Box>
    ),
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          {lastSavedAt ? (
            <p className="mt-1 text-xs text-ku-gold-light">Last saved: {lastSavedAt}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={saveContent}
            className="inline-flex items-center gap-2 rounded-full bg-ku-gold px-4 py-2 text-sm font-semibold text-ku-navy"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
          <button
            type="button"
            onClick={resetContent}
            className="rounded-full border border-ku-gold/40 px-4 py-2 text-sm text-ku-cream"
          >
            Reset Default
          </button>
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem(ADMIN_SESSION_KEY)
              setAuthed(false)
            }}
            className="inline-flex items-center gap-2 rounded-full border border-ku-gold/40 px-4 py-2 text-sm text-ku-cream"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="mb-4 md:hidden">
        <select className="input-field" value={active} onChange={(e) => setActive(e.target.value)}>
          {SECTIONS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden md:block">
          <div className="sticky top-24 rounded-3xl border border-ku-gold/20 bg-ku-navy-2/35 p-3">
            <nav className="space-y-1">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={`w-full rounded-xl px-3 py-2 text-left text-sm ${
                    active === s.id
                      ? 'bg-ku-gold/20 text-ku-gold-light'
                      : 'text-ku-cream/80 hover:bg-ku-gold/10'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>
        <div>{views[active]}</div>
      </div>
    </section>
  )
}

export default AdminPage
