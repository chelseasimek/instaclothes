import { types } from '../actions';

const search = (state = {
    input: 'Blue Shirt', 
    color: 'blue',
    sizes: [ 'xs', 's', 'm', 'l', 'xl' ],
    occasions: [ 'formal', 'casual', 'cocktail', 'back-tie', 'sport', 'business' ]
}, action) => {
    console.log(action.type);
    switch (action.type) {
      case types.UPDATE_SEARCH_VALUES:
        console.log(action);
        return {
          ...state,
            input: action.input, 
            color: action.color,
            sizes: action.size,
            occasions: action.occasionCheckbox
        }
      default:
        return state
    }
  }
  
  export default search