import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product); // see if product already exists in cart
      if (existItem) {
        // if the item exists, update it, otherwise return prev cartItems
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // if item does not yet exist in cart, add it to cartItems
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      console.log("C");
      return state;
  }
};
