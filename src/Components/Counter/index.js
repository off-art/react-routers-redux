import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  add,
  sub,
  run,
  addNumber,
  subNumber,
  asyncAdd,
  addFour,
} from '../../redux/actions/actions'

class Counter extends Component {
  render() {
    const {
      counter,
      onAdd,
      onSub,
      onRandom,
      addNumber,
      subNumber,
      onAsyncAdd,
      addFour,
    } = this.props
    return (
      <div>
        <h1>Счетчик: {counter}</h1>
        <div>
          <button onClick={onAdd}>Добавить 1</button>
          <button onClick={onSub}>Вычесть 1</button>
          <button onClick={onRandom}>Добавить число</button>
          <button
            onClick={() => {
              addNumber(15)
            }}
          >
            Добавить 15
          </button>
          <button
            onClick={() => {
              subNumber(10)
            }}
          >
            Добавить 10
          </button>
          <button onClick={addFour}>Добавить 4</button>
        </div>
        <div className="App">
          <button onClick={() => onAsyncAdd(100)}>
            Ассинхронно добавить 100
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter1.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onRandom: () => dispatch(run()),
    addNumber: (number) => dispatch(addNumber(number)),
    subNumber: (number) => dispatch(subNumber(number)),
    onAsyncAdd: (number) => dispatch(asyncAdd(number)),
    addFour: () => dispatch(addFour()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
