import React, { FC } from 'react'
import { CalendarCell } from './CalendarCell'
import { mock } from './mocks'

export default {
  title: 'Components/CalendarCell',
  component: CalendarCell,
}

export const CalendarCellDefault: FC = () => <CalendarCell events={mock} />
