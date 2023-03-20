import { render, screen } from '@testing-library/react'

import Carrousel from '.'

describe('<Carrousel />', () => {
  it('should render the heading', () => {
    const { container } = render(<Carrousel />)

    expect(screen.getByRole('heading', { name: /Carrousel/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
