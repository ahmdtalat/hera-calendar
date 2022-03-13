import { useState } from 'react'
import './App.css'

import dataset from './dataset.json'
import { CalendarEvent } from './types'

import Event from './components/Event'
import SidePanel from './components/SidePanel'
import CalendarHeader from './components/layout/CalendarHeader'
import CalendarRowNames from './components/layout/CalendarRowNames'
import CalendarRowLayout from './components/layout/CalendarRowLayout'

const data: CalendarEvent[] = dataset

// get all start times
// Array.from(new Set(data.map((d) => formatter.format(new Date(d.start.dateTime)))))

function App() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  return (
    <div className='App'>
      <div className='CalendarView'>
        <div className='grid'>
          <CalendarHeader />
          <CalendarRowNames />
          <main>
            {data.map((event) => (
              <Event event={event} key={event.id} setSelectedEvent={setSelectedEvent} />
            ))}
            <CalendarRowLayout />
          </main>
        </div>
      </div>
      <SidePanel selectedEvent={selectedEvent} />
    </div>
  )
}

export default App
