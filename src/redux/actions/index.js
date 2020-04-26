export const types = {
    UPDATE_SEARCH_VALUES: 'UPDATE_SEARCH_VALUES',
    UPDATE_CURRENT_ITEM: 'UPDATE_CURRENT_ITEM',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    CLEAR_CART: 'CLEAR_CART '
}

export const updateSearchValues = values => ({ ...values, type: types.UPDATE_SEARCH_VALUES});
export const updateCurrentItem = item => ({ item, type: types.UPDATE_CURRENT_ITEM});
export const addItemToCart = item => ({item, type: types.ADD_ITEM_TO_CART});
export const clearCart = () => ({type: types.CLEAR_CART})