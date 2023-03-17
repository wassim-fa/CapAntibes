import { Story, Meta } from '@storybook/react/types-6-0'
import RowToColumn from '.'

export default {
  title: 'RowToColumn',
  component: RowToColumn
} as Meta

export const Default: Story = () => (
  <RowToColumn
    align="center"
    marginForColumn={[0, 0, 0, 0]}
    marginForRow={[0, 0, 0, 0]}
  />
)
