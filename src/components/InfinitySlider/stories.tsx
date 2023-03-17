import { Story, Meta } from '@storybook/react/types-6-0'
import InfinitySlider from '.'

export default {
  title: 'InfinitySlider',
  component: InfinitySlider
} as Meta

export const Default: Story = () => (
  <InfinitySlider>
    <p></p>
  </InfinitySlider>
)
