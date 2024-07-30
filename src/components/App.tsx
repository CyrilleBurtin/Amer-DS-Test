import { PRODUCTS_MOCK } from '../mock/productsMock'
import { type Products } from 'interfaces/products'
import ProductCard from './ProductCard/ProductCard'

function App() {
  return (
    <>
      {PRODUCTS_MOCK.map(
        ({ img, title, subtitle, time, label, id }: Products) => (
          <ProductCard
            img={img}
            title={title}
            subtitle={subtitle}
            time={time}
            label={label}
            id={id}
            key={id}
          />
        )
      )}
    </>
  )
}

export default App
