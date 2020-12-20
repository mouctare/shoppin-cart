import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  // on par sur le principe le pannier est vide(false)
  let alreadyExists = false;
  // on cherche un item dans carteItmes
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  // Si rien n'est dans le pannier je récupere tous le produit + les produit count
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
