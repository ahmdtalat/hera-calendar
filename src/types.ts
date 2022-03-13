export interface CalendarEvent {
  id: string
  status: string
  summary?: string
  start: {
    date?: string
    dateTime: string
    timeZone?: string
  }
  end: {
    date?: string
    dateTime: string
    timeZone?: string
  }
  attendees?: {
    email: string
    responseStatus: string
    organizer?: boolean
    self?: boolean
  }[]
}
