import { formatter } from '../utils'
import { CalendarEvent } from '../types'

interface Props {
  selectedEvent: CalendarEvent | null
}

const SidePanel = ({ selectedEvent }: Props) => {
  return (
    <div className='SidePanel'>
      {!selectedEvent ? (
        <div>Select an event to view details</div>
      ) : (
        <div>
          <p>
            Summary: <strong>{selectedEvent.summary}</strong>
          </p>
          <p>start: {formatter.format(new Date(selectedEvent.start.dateTime))}</p>
          <p>end: {formatter.format(new Date(selectedEvent.end.dateTime))}</p>
          {selectedEvent?.attendees?.length ? (
            <div>
              <p>Attendees:</p>
              <ul className='attendees'>
                {selectedEvent?.attendees?.map((item) => (
                  <li key={item.email}>{item.email}</li>
                ))}
              </ul>
            </div>
          ) : (
            'No Attendees Available'
          )}
        </div>
      )}
    </div>
  )
}

export default SidePanel
