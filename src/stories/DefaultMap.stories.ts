import type { Meta, StoryObj } from '@storybook/react'
import DefaultMap from './DefaultMap'

const meta = {
  title: 'Example/DefaultMap',
  component: DefaultMap
} satisfies Meta<typeof DefaultMap>

export default meta

type Story = StoryObj<typeof meta>
export const Base: Story = {}
