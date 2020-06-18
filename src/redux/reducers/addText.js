import { ADD_TEXT, ADD_CAT } from '../actions/actionType'

const initialState = {
  inputValue: '',
  url: '123',
}

const addText = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        inputValue: action.payload,
      }
    case ADD_CAT:
      return {
        ...state,
        url: action.url
      }
    default:
      break
  }

  return state
}

export default addText
