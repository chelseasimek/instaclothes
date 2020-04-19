export const types = {
    UPDATE_SEARCH_VALUES: 'SEARCH_VALUES',
    UPDATE_CURRENT_ITEM: 'UPDATE_CURRENT_ITEM', 
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART'
}

export const updateSearchValues = values => ({ ...values, type: types.UPDATE_SEARCH_VALUES});
export const updateCurrentItem = values => ({...values, type: types.UPDATE_CURRENT_ITEM});
export const addItemToCart = values => ({ ...values, type: types.ADD_ITEM_TO_CART });