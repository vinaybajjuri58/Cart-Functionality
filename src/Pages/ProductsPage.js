import { useData } from "../DataContext";
import { Product } from "../Components/Product";
const ProductsPage = () => {
  const { dataState } = useData();
  return (
    <div>
      <h2>Products Page</h2>
      <div className="products-container">
        {dataState.products.map((product) => (
          <Product product={product} key={product.id} inProduct />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
