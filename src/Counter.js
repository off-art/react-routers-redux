import React, { Component } from "react";
import { connect } from "react-redux";
import { add2 } from "./redux/actions/actions";

class Counter extends Component {
  render() {
    return (
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h1>Counter {this.props.counter}</h1>
        <hr />
        <button onClick={() => this.props.onUpdates(1)}>Add</button>
        <button onClick={() => this.props.onUpdates(-1)}>Sub</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter2.counter2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdates: (number) => dispatch(add2(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
