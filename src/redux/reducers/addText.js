import { ADD_TEXT, ADD_CAT } from '../actions/actionType'

const initialState = {
  inputValue: '',
  url: 'https://avatanplus.com/files/resources/original/57ac676215a3e1567973d729.png',
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
        url: action.payload
      }
    default:
      break
  }

  return state
}

export default addText
