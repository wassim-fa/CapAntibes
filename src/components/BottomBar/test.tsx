import { render, screen } from '@testing-library/react'

import BottomBar from '.'

describe('<BottomBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<BottomBar />)

    expect(
      screen.getByRole('heading', { name: /BottomBar/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
