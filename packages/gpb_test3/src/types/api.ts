export type CreateEventDto = Omit<EventDto, 'id'>

export type EventDto = {
  id: number
  title: string
  start_date: string
  end_date: string
  reminder: number
}
