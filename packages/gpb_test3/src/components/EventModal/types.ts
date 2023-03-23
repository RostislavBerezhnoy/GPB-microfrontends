import { EventDto } from 'types/api'

export type EventModalProps = {
  isOpen: boolean
  closeModal: () => void
  events: EventDto[]
}
