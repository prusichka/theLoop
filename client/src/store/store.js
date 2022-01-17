import { createStore } from 'redux'
import {allProducts} from "../models";

const defaultState = [];


const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART" :
      return [...state,]
    case "REMOVE_FROM_CART":
      return  {}

    default: return state
  }
}


export const store = createStore(rootReducer)