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
      default:
        return state
    }
  }
  
  export default cart