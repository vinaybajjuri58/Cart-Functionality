import { Product } from "../Components";
import { useData } from "../DataContext";
const CartPage = () => {
  const { dataState } = useData();
  const { cart, saveLater } = dataState;
  return (
    <div>
      <h2>Cart Page</h2>
      <div className="products-container">
        {cart.length === 0 && <h1>No Products in Cart</h1>}
        {cart.map((product) => (
          <Product product={product} key={product.id} inCart />
        ))}
      </div>
      <div>
        {saveLater.length > 0 && (
          <div>
            <h2>Save To Later </h2>
            {saveLater.map((product) => (
              <Product product={product} key={product.id} inSaveLater />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
