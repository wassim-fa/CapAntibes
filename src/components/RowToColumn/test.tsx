import { render, screen } from '@testing-library/react'

import RowToColumn from '.'

describe('<RowToColumn />', () => {
  it('should render the heading', () => {
    const { container } = render(<RowToColumn />)

    expect(
      screen.getByRole('heading', { name: /RowToColumn/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
