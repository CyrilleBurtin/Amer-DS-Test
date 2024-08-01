import { PRODUCTS_MOCK } from '../mock/productsMock';
import { type Product } from 'interfaces/product';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="bg-gray-200 h-lvh w-full flex items-center justify-center">
      {PRODUCTS_MOCK.map((product: Product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
}

export default App;
