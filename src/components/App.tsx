import { PRODUCTS_MOCK } from '../mock/productsMock'
import { type Product } from 'interfaces/product'
import ProductCard from './ProductCard'

function App() {
  return (
    <div className="bg-gray-200 h-lvh w-full flex items-center justify-center">
      {PRODUCTS_MOCK.map(
        ({ img, title, description, time, label, id }: Product) => (
          <ProductCard
            img={img}
            title={title}
            description={description}
            time={time}
            label={label}
            id={id}
            key={id}
          />
        )
      )}
    </div>
  )
}

export default App
