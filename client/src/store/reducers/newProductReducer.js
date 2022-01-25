import {allProducts} from "../../models";

const defaultStateCart = {
  newCartArr: allProducts
}

const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'

export const newProductReducer = (state = defaultStateCart, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT :
      return { ...state, newCartArr: [...state.newCartArr, action.payload] }
    default: return state
  }
}

export const _addNewCart = (payload) => ({type: ADD_NEW_PRODUCT, payload})