import ProductCard from './ProductCard'
import PRODUCTS_MOCK from 'mock/productsMock.js'
import { render } from '@testing-library/react'

describe('<ProductCard>', () => {
  const { id, img, title, subtitle, time, label } = PRODUCTS_MOCK
  it('should render the component', () => {
    const { container } = render(
      <ProductCard
        id={id}
        img={img}
        title={title}
        subtitle={subtitle}
        time={time}
        label={label}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
