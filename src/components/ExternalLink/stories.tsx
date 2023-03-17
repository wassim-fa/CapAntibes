import { Story, Meta } from '@storybook/react/types-6-0'
import ExternalLink from '.'

export default {
  title: 'ExternalLink',
  component: ExternalLink
} as Meta

export const Default: Story = () => <ExternalLink link="/" />
