import { combineReducers } from 'redux'
import photos from './photos'
import searchTag from './searchTag'

export default combineReducers({
  photos,
  searchTag
})