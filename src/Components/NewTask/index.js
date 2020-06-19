import React from 'react'

import './NewTask.scss'
import { connect } from 'react-redux'
import {
  changeText,
  addNum,
  remNum,
  addTexts,
  addMyCats,
} from '../../redux/actions/actions'
import Loader from '../Loader'

function NewTask({
  counter,
  handlerText,
  addNumber,
  remNumber,
  text,
  addText,
  url,
  addMyCat,
  isLoading,
}) {
  return (
    <div>
      <h1>Новая задача для redux</h1>

      <div className="hw dm-counter">
        <h1>Counter redux</h1>
        <div className="dm-inputs">
          <input type="button" value="+" onClick={addNumber} />
          <input type="text" value={counter} onChange={handlerText} />
          <input type="button" value="-" onClick={remNumber} />
        </div>
      </div>
      <div className="hw dm-inputText">
        <h1>Text input redux</h1>
        <div className="dm-textValue">
          <input onChange={addText} type="text" />
          <p className="dm-inputText_blockText">{text}</p>
        </div>
      </div>
      <div className="hw dm-api">
        <h1>Api request redux</h1>
        <div className="dm-cats">
          <input type="button" onClick={()=> addMyCat(isLoading)} value="Give my Cat" />
          {isLoading ? <Loader /> : <img src={url} alt="Cat" />}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.newTask.counter,
    text: state.newTask.text,
    url: state.newTask.url,
    isLoading: state.newTask.isLoading,
  }
}
const mapDispatchToprops = (dispatch) => {
  return {
    handlerText: (e) => dispatch(changeText(e)),
    addNumber: () => dispatch(addNum()),
    remNumber: () => dispatch(remNum()),
    addText: (e) => dispatch(addTexts(e)),
    addMyCat: (isLoading) => dispatch(addMyCats(isLoading)),
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(NewTask)
