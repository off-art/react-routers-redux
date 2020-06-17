import {
  ADD,
  SUB,
  RUN,
  ADD_NUM,
  SUB_NUM,
  ADD_FOUR,
} from '../actions/actionType'

const initialState = {
  counter: 0,
}

const counter1 = (state = initialState, action) => {
  const { counter } = state
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counter: counter + 1,
      }
    case SUB:
      return {
        ...state,
        counter: counter - 1,
      }
    case RUN:
      return {
        ...state,
        counter: Math.floor(Math.random() * 100),
      }
    case ADD_NUM:
      return {
        ...state,
        counter: counter + action.value,
      }
    case SUB_NUM:
      return {
        ...state,
        counter: counter - action.value,
      }
    case ADD_FOUR:
      return {
        ...state,
        counter: counter + 4,
      }
    default:
      break
  }
  return state
}

export default counter1
