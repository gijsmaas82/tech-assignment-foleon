import {SET_PHOTOS} from '../actions'

export default function photos(state = null, action = {}) {
  switch (action.type) {
    case SET_PHOTOS:
      return action.payload
    default:
      return state
  }
}