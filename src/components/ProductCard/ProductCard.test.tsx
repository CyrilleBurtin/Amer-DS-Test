import { render } from '@testing-library/react'
import ProductCard from './'
import { describe } from 'vitest'

describe('<ProductCard>', () => {
  const product = {
    id: '12345ABD',
    img: 'image/test.jpeg',
    title: 'Ski de rando',
    description: 'Pour les skieur confirmés',
    time: 10,
    label: 'Promo'
  }

  it('should render the component', () => {
    const { container, getByText } = render(<ProductCard {...product} />)

    expect(getByText(/Ski de rando/i)).toBeInTheDocument()
    expect(getByText(/Pour les skieur confirmés/i)).toBeInTheDocument()
    expect(getByText(/Promo/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
