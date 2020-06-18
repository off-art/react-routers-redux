import React, { Component } from 'react'
import TypeHere from '../TypeHere'

import './Parrot.css'

import { connect } from 'react-redux'
class Parrot extends Component {
  render() {
    const { inputValue } = this.props;
    return (
      <div>
        <TypeHere />
        <p className="block">{inputValue}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.addText.inputValue,
  }
}

export default connect(mapStateToProps)(Parrot)
