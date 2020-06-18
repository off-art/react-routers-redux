import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addText } from '../../redux/actions/actions'
class TypeHere extends Component {
  
  render() {
    const { inputValue, handlerText } = this.props
    return (
      <div>
        <input value={inputValue} onChange={handlerText} type="text" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.addText.inputValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerText: (e) => dispatch(addText(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeHere)
