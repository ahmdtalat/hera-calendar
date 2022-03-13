// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
export const formatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  day: '2-digit'
})

export const rowNames = [
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
