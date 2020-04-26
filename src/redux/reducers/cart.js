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
      default:
        return state
    }
  }

  export default cart