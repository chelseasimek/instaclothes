const search = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_VALUES':
        return [
          ...state,
          {
            input: action.values, 
            color: action.colorRadio.state,
            size: action.sizeCheckbox.state,
            occasionCheckbox: action.occasionCheckbox
          }
        ]
      default:
        return state
    }
  }
  
  export default search