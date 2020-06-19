import {
  TEXT_REDUX,
  ADD_REDUX,
  REM_REDUX,
  ADD_TEXT_REDUX,
  ADD_CAT_REDUX,
} from '../actions/actionType'

const initialState = {
  counter: 0,
  text: '',
  url:
    'https://w7.pngwing.com/pngs/513/976/png-transparent-pixel-art-sticker-cat-cat.png',
  isLoading: false,
}

const newTask = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_REDUX:
      return {
        ...state,
        counter: action.payload,
      }
    case ADD_REDUX:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case REM_REDUX:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case ADD_TEXT_REDUX:
      return {
        ...state,
        text: action.payload,
      }
    case ADD_CAT_REDUX:
      return {
        ...state,
        url: action.payload,
        isLoading: false
      }
    default:
      break
  }

  return state
}

export default newTask
