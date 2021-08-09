const removeFromCart = ({ cart, productId }) => {
  return cart.filter((product) => product.id !== productId);
};
const returnNewcart = ({ cart, productId, newQuantity }) => {
  const productIndex = cart.findIndex((product) => product.id === productId);
  cart[productIndex].quantity = newQuantity;
  return cart.filter((product) => product.quantity > 0);
};
export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: returnNewcart({
          cart: state.cart,
          productId: action.payload.productId,
          newQuantity: action.payload.quantity,
        }),
      };
    case "ADD_TO_SAVE_LATER":
      return {
        ...state,
        cart: removeFromCart({
          cart: state.cart,
          productId: action.payload.product.id,
        }),
        saveLater: [...state.saveLater, { ...action.payload.product }],
      };
    case "MOVE_TO_CART_FROM_SAVE_LATER":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        saveLater: state.saveLater.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "REMOVE_FROM_SAVE_LATER":
      return {
        ...state,
        saveLater: state.saveLater.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      break;
  }
};
