import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ServiceCard } from './ServiceCard'

export default {
  title: 'Components/ServiceCard',
  component: ServiceCard,
}

export const ServiceCardDefault: ComponentStory<typeof ServiceCard> = args => (
  <ServiceCard {...args} />
)

ServiceCardDefault.args = {
  id: '1',
  name: 'Title 1',
  content: 'Mollit consectetur laboris voluptate Lorem in non anim minim reprehenderit.',
  price: 25_000,
}
