import { types } from '../actions';

const item = (state = {
    item: {}
}, action) => {
    switch (action.type) {
      case types.UPDATE_CURRENT_ITEM:
        return {
          ...state,
          item: action.item
        }
      default:
        return state
    }
  }
  
  export default item