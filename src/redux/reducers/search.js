const search = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_VALUES':
        return [
          ...state,
          {
            input: action.input, 
            color: action.color,
            size: action.size,
            occasionCheckbox: action.occasionCheckbox
          }
        ]
      default:
        return state
    }
  }
  
  export default search