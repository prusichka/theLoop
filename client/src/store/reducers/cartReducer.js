const defaultStateCart = {
  cartArr: []
}

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_ITEM_COUNT = 'ADD_ITEM_COUNT'
const REMOVE_ITEM_COUNT = 'REMOVE_ITEM_COUNT'

export const cartReducer = (state = defaultStateCart, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case ADD_TO_CART :
      return {...state, cartArr: [...state.cartArr, action.payload]}
    case REMOVE_FROM_CART :
      return {...state, cartArr: state.cartArr.filter(cartItem => cartItem._id !== action.payload) }
    case ADD_ANOTHER_ONE:
      return {...state, cartArr: [...state.cartArr, state.cartArr.find(product => product._id === action.payload)]}
=======
    case ADD_TO_CART:
      return { ...state, cartArr: [...state.cartArr, { ...action.payload, qty: 1 }] }
    case REMOVE_FROM_CART:
      return { ...state, cartArr: state.cartArr.filter(cartItem => cartItem._id !== action.payload) }
    case ADD_ITEM_COUNT:
      return {
        ...state,
        cartArr: state.cartArr.map(el => el._id === action.payload ? { ...el, qty: el.qty + 1 } : el
        )
      }
    case REMOVE_ITEM_COUNT:
      return {
        ...state,
        cartArr: state.cartArr.map(el => el._id === action.payload ? { ...el, qty: el.qty - 1 } : el
        )
      }
>>>>>>> c47629cdeec357e71df67da1152a10207a6ff9ba
    default: return state
  }
}

export const _addToCart = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const addItemCount = (payload) => ({ type: ADD_ITEM_COUNT, payload })
export const removeItemCount = (payload) => ({ type: REMOVE_ITEM_COUNT, payload })