const defaultStateCart = {
  cartArr: []
}

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_ANOTHER_ONE = 'ADD_ANOTHER_ONE'

export const cartReducer = (state = defaultStateCart, action ) => {
  switch (action.type) {
    case ADD_TO_CART :
      return {...state, cartArr: [...state.cartArr, action.payload]}
    case REMOVE_FROM_CART :
      return {...state, cartArr: state.cartArr.filter(cartItem => cartItem._id !== action.payload) }
    case ADD_ANOTHER_ONE:
      return {...state, cartArr: [...state.cartArr, ]}
    default: return state
  }
}

export const _addToCart = (payload) => ({type: ADD_TO_CART, payload})
export const removeFromCart = (payload) => ({type: REMOVE_FROM_CART, payload})