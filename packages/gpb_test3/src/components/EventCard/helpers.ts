import dayjs from 'dayjs'
import * as Yup from 'yup'

export const defaultDateRangeValue = dayjs('00:00:00', 'HH:mm:ss')

export const validationSchema = Yup.object({
  title: Yup.string().required(),
  start_date: Yup.string().required(),
  end_date: Yup.string().required(),
  reminder: Yup.number(),
})

export const EMPTY_TIME = '00:00:00'
