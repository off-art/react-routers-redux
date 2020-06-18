import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCat } from '../../redux/actions/actions'

class AddCat extends Component {
  render() {
    const { addCats, url } = this.props
    return (
      <div className='add'>
        <h1>тут будут котэ</h1> <br />
        <button onClick={addCats}>Жми</button>
        <img src={url} alt="cat" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.addText.url,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCats: () => dispatch(addCat()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCat)
