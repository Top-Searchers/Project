// reducers/counterReducer.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';

const initialState = {
  items:[],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        // Check if item already exists in the cart
        const existingItem = state.items.find(item => item.index === action.payload.index);
  
        if (existingItem) {
          // Increase the quantity of the existing item
          return {
            ...state,
            items: state.items.map(item =>
              item.index === action.payload.index
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        } else {
          // Add new item with a quantity of 1
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }]
          };
        }
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter(item => item.index !== action.payload.index)
        };

        
        case UPDATE_ITEM_QUANTITY:
          return {
            ...state,
            items: state.items.map(item =>
              item.index === action.payload.index
                ? { ...item, quantity: Math.max(1, item.quantity + action.payload.quantity) }
                : item
            )
          };
      default:
        return state;
    }
  };

export default cartReducer;
