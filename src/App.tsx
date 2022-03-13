import './App.css'

import dataset from './dataset.json'
import { CalendarEvent } from './types'

import Event from './components/Event'
import CalendarHeader from './components/layout/CalendarHeader'
import CalendarRowNames from './components/layout/CalendarRowNames'
import CalendarRowLayout from './components/layout/CalendarRowLayout'

const data: CalendarEvent[] = dataset

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

export default App
