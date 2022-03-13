import { useState } from 'react'

import './App.css'

import dataset from './dataset.json'
import { CalendarEvent } from './types'

const data: CalendarEvent[] = dataset

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  day: '2-digit'
})

const rowNames = [
  { name: '7 AM', idx: 1 },
  { name: '8 AM', idx: 2 },
  { name: '9 AM', idx: 3 },
  { name: '10 AM', idx: 4 },
  { name: '11 AM', idx: 5 },
  { name: '12 PM', idx: 6 },
  { name: '1 PM', idx: 7 },
  { name: '2 PM', idx: 8 },
  { name: '3 PM', idx: 9 },
  { name: '4 PM', idx: 10 },
  { name: '5 PM', idx: 11 },
  { name: '6 PM', idx: 12 },
  { name: '7 PM', idx: 13 },
  { name: '8 PM', idx: 14 },
  { name: '9 PM', idx: 15 },
  { name: '10 PM', idx: 16 },
  { name: '11 PM', idx: 17 }
]

// get all start times
// Array.from(new Set(data.map((d) => formatter.format(new Date(d.start.dateTime)))))

function App() {
  return (
    <div className='App'>
      <div className='CalendarView'>
        <div className='grid'>
          <CalendarHeader />
          <CalendarRowNames />
          <main>
            {data.map((event) => (
              <Event event={event} key={event.id} />
            ))}
            <CalendarRowLayout />
          </main>
        </div>
      </div>
      <div className='SidePanel'>Display event details here</div>
    </div>
  )
}

const CalendarHeader = () => (
  <header>
    <div>
      <span>Mon</span> <span>11</span>
    </div>
    <div>
      <span>Tue</span> <span>12</span>
    </div>
    <div>
      <span>Wed</span> <span>13</span>
    </div>
    <div>
      <span>Thu</span> <span>14</span>
    </div>
    <div>
      <span>Fri</span> <span>15</span>
    </div>
  </header>
)

const Event = ({ event }: { event: CalendarEvent }) => {
  // startDayPeriod: AM || PM
  // formatToParts:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
  const [startDay, , startHour, , startMin, , startDayPeriod] = formatter.formatToParts(new Date(event.start.dateTime))
  const [, , endHour, , endMin, , endDayPeriod] = formatter.formatToParts(new Date(event.end.dateTime))

  // locate event positionon calendar layout
  const colStart = Number(startDay.value) - 10 // we have five days from 11 to 15

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
        zIndex: 5,
        margin: '2px',
        display: 'flex',
        cursor: 'pointer',
        borderRadius: '8px',
        background: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid gray',
        marginTop: startMinToPixel,
        marginBottom: endMinToPixel,
        gridArea: `${rowStart}/${colStart}/${rowEnd}/${colStart}`
      }}
      className='event'
    >
      {event.summary}
    </div>
  )
}

const CalendarRowNames = () => (
  <aside>
    {rowNames.map((row) => (
      <div key={row.idx}>{row.name}</div>
    ))}
  </aside>
)
const CalendarRowLayout = () => (
  <>
    {rowNames.map((row) => (
      <div
        style={{
          gridArea: `${row.idx}/1/${row.idx}/7`,
          borderBottom: '2px solid gray',
          height: '0%',
          zIndex: 0
        }}
      />
    ))}
  </>
)

export default App
