export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';

export const addToCart = (title,src,desc,price,index) => {
   
    return({
  type: ADD_TO_CART,
  payload: {price,desc,title,src,index}
});}

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: {index}
});


export const updateItemQuantity = (index, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: { index, quantity }
  });