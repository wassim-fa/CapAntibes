import { render, screen } from '@testing-library/react'

import Row from '.'

describe('<Row />', () => {
  it('should render the heading', () => {
    const { container } = render(<Row />)

    expect(screen.getByRole('heading', { name: /Row/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
