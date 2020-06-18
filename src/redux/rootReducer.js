import { combineReducers } from 'redux'

import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'
import addText from './reducers/addText'

export default combineReducers({
  counter1,
  counter2,
  addText,
})
