import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CalendarQueries } from 'api'
import { Typography } from 'antd'
import { BackButton, WrappedBox, Box, Loader, errorToastWithButton } from 'gpb_ui'
import { EventCard } from 'components/EventCard'

const { Title } = Typography

export const ModifyEventPage = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const { useGetCalendarEventByIdQuery } = CalendarQueries

  const {
    data: event,
    isLoading: isEventLoading,
    isError: isEventError,
    refetch: refetchEvent,
  } = useGetCalendarEventByIdQuery(+id, { skip: !id })

  useEffect(() => {
    if (isEventError) errorToastWithButton({ retry: () => refetchEvent() })
  }, [isEventError, refetchEvent])

  if (isEventLoading)
    return (
      <WrappedBox>
        <Loader />
      </WrappedBox>
    )

  if (!event)
    return (
      <WrappedBox>
        <Title level={3}>Нет данных</Title>
      </WrappedBox>
    )

  return (
    <Box>
      <Box marginBottom={10}>
        <BackButton onNavigate={() => navigate(-1)} />
      </Box>
      <EventCard event={event} />
    </Box>
  )
}
