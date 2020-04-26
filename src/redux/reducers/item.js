import { types } from '../actions';

const item = (state = {
    item: {
      title: 'blue casual shirt',
      store: 'Target',
      price: '$24.99',
      imageAlt: function () { return `Image of a ${this.title}` }
    }
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