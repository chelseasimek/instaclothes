import { types } from '../actions';

const cart = (state = [], action) => {
    switch (action.type) {
      case types.ADD_ITEM_TO_CART:
        return [
          ...state,
          {
            ...action.item
          }
        ]
      case types.CLEAR_CART:
        return []
      case types.REMOVE_ITEM_FROM_CART:
          return action.cart
      default:
        return state
    }
  }

  export default cart