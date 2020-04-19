import { combineReducers } from 'redux'
import search from './search'
import item from './item'
import cart from './cart'

export default combineReducers({
  search, 
  item,
  cart
})