import { useNavigate } from 'react-router-dom'
import { BackButton, Box } from 'gpb_ui'
import { EventCard } from 'components/EventCard'

export const CreateEventPage = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Box marginBottom={10}>
        <BackButton onNavigate={() => navigate(-1)} />
      </Box>
      <EventCard />
    </Box>
  )
}
