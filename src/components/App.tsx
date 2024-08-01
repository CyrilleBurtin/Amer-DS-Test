import { PRODUCTS_MOCK } from '../mock/productsMock';
import { type Product } from 'interfaces/product';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="flex h-lvh w-full items-center justify-center bg-gray-200 ">
      {PRODUCTS_MOCK.map((product: Product) => (
        <ProductCard {...product} key={product.description} />
      ))}
    </div>
  );
}

export default App;
