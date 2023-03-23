import { FC } from 'react'
import { Typography } from 'antd'
import { CalendarCellProps } from './types'

const { Text } = Typography

export const CalendarCell: FC<CalendarCellProps> = ({ events }) => (
  <ul>
    {events.map(item => (
      <li key={item.id}>
        <Text>{item.title}</Text>
      </li>
    ))}
  </ul>
)
