import { render, screen } from '@testing-library/react'

import ExternalLink from '.'

describe('<ExternalLink />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExternalLink />)

    expect(
      screen.getByRole('heading', { name: /ExternalLink/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
