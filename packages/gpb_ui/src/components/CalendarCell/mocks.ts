import { CalendarCellProps } from './types'

export const mock: CalendarCellProps['events'] = [
  {
    id: 1,
    title: 'Some event 1',
    start_date: '2023-02-07T19:10:05+03:00Z',
    end_date: '2023-02-07T21:10:05+03:00Z',
    reminder: 1_677_801_783_349,
  },
  {
    id: 2,
    title: 'Some event 2',
    start_date: '2023-02-07T19:10:05+03:00Z',
    end_date: '2023-02-07T21:10:05+03:00Z',
    reminder: 1_677_801_783_349,
  },
]
