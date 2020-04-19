const search = (state = {
    input: 'Blue Shirt', 
    color: 'blue',
    sizes: [ 'xs', 's', 'm', 'l', 'xl' ],
    occasions: [ 'formal', 'casual', 'cocktail', 'back-tie', 'sport', 'business' ]
}, action) => {
    switch (action.type) {
      case 'SEARCH_VALUES':
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