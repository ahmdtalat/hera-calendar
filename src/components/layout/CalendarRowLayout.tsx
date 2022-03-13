import { rowNames } from '../../utils'

// calendar-wide line for better timing visibitly.
const CalendarRowLayout = () => (
  <>
    {rowNames.map((row) => (
      <div
        style={{
          zIndex: 0,
          height: '0%',
          borderBottom: '2px solid gray',
          gridArea: `${row.idx}/1/${row.idx}/7`
        }}
      />
    ))}
  </>
)

export default CalendarRowLayout
