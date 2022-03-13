import { CalendarEvent } from '../types'
import { formatter, rowNames } from '../utils'

interface Props {
  selected: boolean
  event: CalendarEvent
  setSelectedEvent: (value: React.SetStateAction<CalendarEvent | null>) => void
}

const Event = ({ event, selected, setSelectedEvent }: Props) => {
  // startDayPeriod: AM || PM
  // formatToParts:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
  const [startDay, , startHour, , startMin, , startDayPeriod] = formatter.formatToParts(new Date(event.start.dateTime))
  const [, , endHour, , endMin, , endDayPeriod] = formatter.formatToParts(new Date(event.end.dateTime))

  // ----------------------------------
  // locate event positionon calendar layout
  // we have five days from 11 to 15
  // & 5 columns.
  const colStart = Number(startDay.value) - 10

  const rowStart = rowNames.find((r) => r.name === `${startHour.value} ${startDayPeriod.value}`)?.idx
  const rowEnd = rowNames.find((r) => r.name === `${endHour.value} ${endDayPeriod.value}`)?.idx
  // ----------------------------------

  // row height is 60px which is like emulating 60 minutes
  // & I use margin top & bottom to locate the event to the exact position.
  const startMinToPixel = `${Number(startMin.value)}px`
  const endMinToPixel = `${
    Number(endHour.value) === Number(startHour.value) ? `${60 - Number(endMin.value)}px` : `-${Number(endMin.value)}px`
  }`

  console.log({ startHour, endHour, endMinToPixel })
  if (event.summary === 'Donye x Hera [Product Designer]') {
  }

  return (
    <div
      key={event.id}
      style={{
        marginTop: startMinToPixel,
        marginBottom: endMinToPixel,
        gridArea: `${rowStart}/${colStart}/${rowEnd}/${colStart}`,
        border: selected ? '2px solid blue' : ''
      }}
      className='event'
      onClick={() => setSelectedEvent(event)}
    >
      {event.summary}
    </div>
  )
}

export default Event
