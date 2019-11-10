import { combineReducers } from 'redux'
import photos from './photos'
import searchTag from './searchTag'
import pagination from './pagination'

export default combineReducers({
  photos,
  searchTag,
  pagination
})