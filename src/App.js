import React, { Component } from 'react'
import { INCREMENT, DECREMENT } from './reducer'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { count, increment, decrement } = this.props
    return (
        <div>
          <div>Count : {count}</div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: INCREMENT}),
    decrement: () => dispatch({type: DECREMENT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
