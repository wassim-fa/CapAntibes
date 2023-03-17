import { render, screen } from '@testing-library/react'

import InfinitySlider from '.'

describe('<InfinitySlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<InfinitySlider />)

    expect(
      screen.getByRole('heading', { name: /InfinitySlider/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
