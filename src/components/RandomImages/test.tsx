import { render, screen } from '@testing-library/react'

import RandomImage from '.'

describe('<RandomImage />', () => {
  it('should render the heading', () => {
    const { container } = render(<RandomImage />)

    expect(
      screen.getByRole('heading', { name: /RandomImage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
