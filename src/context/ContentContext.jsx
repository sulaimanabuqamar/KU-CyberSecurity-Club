import { useState } from 'react'
import AppContentContext from './appContentContext'
import defaultContent from '../data/defaultContent'

const STORAGE_KEY = 'ku-cyber-content'

function migrateEventsModel(eventsData) {
  if (!eventsData) {
    return defaultContent.events
  }

  if (eventsData.terms && eventsData.allEvents) {
    return {
      ...defaultContent.events,
      ...eventsData,
    }
  }

  const schedulePeriods = eventsData.schedulePeriods || []
  const terms = schedulePeriods.map((term, index) => ({
    id: term.id || `term-${index + 1}`,
    label: term.label || `Term ${index + 1}`,
    subtitle: term.subtitle || '',
  }))

  const fallbackTermId = terms[0]?.id || 'term-1'
  const currentTermId = eventsData.currentTermId || fallbackTermId

  const upcomingEvents = (eventsData.upcomingEvents || []).map((event, index) => ({
    id: event.id || `event-upcoming-${index + 1}`,
    termId: currentTermId,
    ...event,
  }))

  const scheduleEvents = schedulePeriods.flatMap((term, termIndex) =>
    (term.events || []).map((event, eventIndex) => ({
      id: event.id || `event-schedule-${termIndex + 1}-${eventIndex + 1}`,
      termId: terms[termIndex]?.id || fallbackTermId,
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description || '',
      tag: event.type || 'Workshop',
    })),
  )

  const allEvents = [...upcomingEvents, ...scheduleEvents]

  return {
    ...defaultContent.events,
    ...eventsData,
    terms: terms.length ? terms : defaultContent.events.terms,
    currentTermId,
    allEvents: allEvents.length ? allEvents : defaultContent.events.allEvents,
  }
}

function migrateContent(parsed) {
  return {
    ...defaultContent,
    ...parsed,
    events: migrateEventsModel(parsed.events),
  }
}

function loadInitialContent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return defaultContent
    }
    const parsed = JSON.parse(stored)
    return migrateContent(parsed)
  } catch {
    return defaultContent
  }
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadInitialContent)
  const [lastSavedAt, setLastSavedAt] = useState('')

  const saveContent = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
    setLastSavedAt(new Date().toLocaleString())
  }

  const resetContent = () => {
    localStorage.removeItem(STORAGE_KEY)
    setContent(defaultContent)
    setLastSavedAt('')
  }

  const value = {
    content,
    setContent,
    saveContent,
    resetContent,
    lastSavedAt,
  }

  return (
    <AppContentContext.Provider value={value}>
      {children}
    </AppContentContext.Provider>
  )
}
