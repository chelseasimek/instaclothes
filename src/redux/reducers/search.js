import { types } from '../actions';

const search = (state = {
    input: 'shirt',
    color: 'blue',
    sizes: [ 'xs', 's', 'm', 'l', 'xl' ],
    occasions: [ 'formal', 'casual', 'cocktail', 'back-tie', 'sport', 'business' ]
}, action) => {
    switch (action.type) {
      case types.UPDATE_SEARCH_VALUES:
        return {
          ...state,
            input: action.input,
            color: action.color,
            sizes: action.size,
            occasions: action.occasion
        }
      default:
        return state
    }
  }

  export default search