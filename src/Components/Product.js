import { Link } from "react-router-dom";
import { useData } from "../DataContext";
export const Product = ({ product, inProduct, inCart, inSaveLater }) => {
  const { dataState, dispatch } = useData();
  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const incrementButtonHandler = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        quantity: product.quantity + 1,
        productId: product.id,
      },
    });
  };
  const decrementButtonHandler = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        quantity: product.quantity - 1,
        productId: product.id,
      },
    });
  };
  const removeFromCartHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: product.id,
      },
    });
  };
  const moveToCartHandler = () => {
    dispatch({
      type: "MOVE_TO_CART_FROM_SAVE_LATER",
      payload: product,
    });
  };
  const removeFromSaveLater = () => {
    dispatch({
      type: "REMOVE_FROM_SAVE_LATER",
      payload: {
        id: product.id,
      },
    });
  };
  return (
    <div className="card-shopping single-product">
      <img src={product.image} alt={product.description} className="card-img" />
      <div className="card-text-content">
        <h4 className="card-brand">{product.category}</h4>
        <p className="card-desc">{product.title}</p>
        {inCart && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <button
                className="button button-primary border-primary card-action"
                onClick={incrementButtonHandler}
              >
                +
              </button>
              <button
                className="button button-primary border-primary card-action"
                onClick={decrementButtonHandler}
              >
                -
              </button>
            </div>
            <p>Quantity : {product.quantity}</p>
            <div>
              <button
                className="button button-primary border-primary card-action"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_SAVE_LATER",
                    payload: { product: { ...product, quantity: undefined } },
                  })
                }
              >
                {" "}
                SAVE FOR LATER
              </button>
              <button
                className="button button-warning border-warning card-action"
                onClick={removeFromCartHandler}
              >
                {" "}
                REMOVE
              </button>
            </div>
          </div>
        )}
        {inSaveLater && (
          <div className="card-action">
            <button
              onClick={moveToCartHandler}
              className="button button-primary border-primary "
            >
              MOVE TO CART
            </button>
            <button
              className="button button-warning border-warning card-action"
              onClick={removeFromSaveLater}
            >
              {" "}
              REMOVE
            </button>
          </div>
        )}
        {inProduct && (
          <div className="card-action">
            {checkIfInCart({ cart: dataState.cart, productId: product.id }) ===
            -1 ? (
              <button
                onClick={addToCartHandler}
                className="button button-primary border-primary "
              >
                Add To Cart
              </button>
            ) : (
              <Link to="/cart">
                <button className="button button-primary border-primary ">
                  Go To Cart
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const checkIfInCart = ({ cart, productId }) => {
  return cart.findIndex((product) => product.id === productId);
};
