import { rowNames } from '../../utils'

const CalendarRowNames = () => (
  <aside>
    {rowNames.map((row) => (
      <div key={row.idx}>{row.name}</div>
    ))}
  </aside>
)
export default CalendarRowNames
