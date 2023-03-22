import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ServiceQueries } from 'api'
import { Typography } from 'antd'
import {
  ServiceCard,
  ServiceCardProps,
  WrappedBox,
  Loader,
  BackButton,
  errorToastWithButton,
} from 'gpb_ui'

const { Title } = Typography

export const Test2Card = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()
  const { useGetServiceByIdQuery } = ServiceQueries

  const {
    data: service = {} as ServiceCardProps,
    isLoading: isServiceLoading,
    isError: isServiceError,
    refetch: refetchService,
  } = useGetServiceByIdQuery(id, { skip: !id })

  useEffect(() => {
    if (isServiceError) errorToastWithButton({ retry: () => refetchService() })
  }, [isServiceError, refetchService])

  if (isServiceLoading)
    return (
      <WrappedBox>
        <Loader />
      </WrappedBox>
    )

  return (
    <>
      <BackButton marginBottom={20} onNavigate={() => navigate(-1)} />
      {Object.getOwnPropertyNames(service).length !== 0 ? (
        <ServiceCard {...service} />
      ) : (
        <WrappedBox>
          <Title level={3}>Нет данных</Title>
        </WrappedBox>
      )}
    </>
  )
}
