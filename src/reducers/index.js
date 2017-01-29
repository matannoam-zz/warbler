import { combineReducers } from 'redux'
import { routerReducer } from 'preact-router-redux/lib/reducer'
import libraries from './libraries'
import tracks from './tracks'

export default combineReducers({
  libraries,
  tracks,
  routing: routerReducer
})
