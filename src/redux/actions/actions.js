import {
  ADD,
  SUB,
  RUN,
  ADD_NUM,
  SUB_NUM,
  ADD2,
  ADD_FOUR,
  ADD_TEXT,
  ADD_CAT,
  TEXT_REDUX,
  ADD_REDUX,
  REM_REDUX,
  ADD_TEXT_REDUX,
  ADD_CAT_REDUX
} from './actionType'

import axios from 'axios'

export function add() {
  return {
    type: ADD,
  }
}
export function sub() {
  return {
    type: SUB,
  }
}
export function run() {
  return {
    type: RUN,
  }
}
export function addNumber(number) {
  return {
    type: ADD_NUM,
    value: number,
  }
}
export function subNumber(number) {
  return {
    type: SUB_NUM,
    value: number,
  }
}

export function addFour() {
  return {
    type: ADD_FOUR,
  }
}
export function addText(e) {
  return {
    type: ADD_TEXT,
    payload: e.target.value,
  }
}

export function addCat() {
  return async (dispatch) => {
    const response = await axios(
      'https://api.thecatapi.com/v1/images/search?size=full',
    )
    const { url } = response.data[0]
    dispatch({
      type: ADD_CAT,
      payload: url,
    })
  }
}
export function asyncAdd(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber(number))
    }, 3000)
    clearTimeout()
  }
}
export function add2(number) {
  return {
    type: ADD2,
    value: number,
  }
}



export function changeText(e) {
  return {
    type: TEXT_REDUX,
    payload: e.target.value
  }
}

export function addNum() {
  return {
    type: ADD_REDUX,
  }
}

export function remNum() {
  return {
    type: REM_REDUX,
  }
}

export function addTexts(e) {
  return {
    type: ADD_TEXT_REDUX,
    payload: e.target.value
  }
}
export function addMyCats(isLoading) {
  isLoading = true
  return async dispatch => {
    const res = await axios('https://api.thecatapi.com/v1/images/search?size=full');
    const { url } = res.data[0]
    dispatch({
      type: ADD_CAT_REDUX,
      payload: url,
    })
  }
}
