import { useState } from 'react'

import './App.css'

import dataset from './dataset.json'
import { CalendarEvent } from './types'

const data: CalendarEvent[] = dataset

// console.log(Array.from(new Set(data.map((d) => formatter.format(new Date(d.start.dateTime))))))

function App() {
  return (
    <div className='App'>
      <div className='CalendarView'>
        <div className='grid'>
          <CalendarHeader />
          <CalendarRowNames />
          <main>
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
