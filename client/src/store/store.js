import {combineReducers, createStore} from 'redux'
import {cartReducer} from './reducers/cartReducer'
import {newProductReducer} from './reducers/newProductReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  newProduct: newProductReducer,
})


export const store = createStore(rootReducer)