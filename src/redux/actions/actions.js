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
} from './actionType'

import axios from 'axios';

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
