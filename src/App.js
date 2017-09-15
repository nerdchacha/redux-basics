import React, { Component } from 'react'
import store from './store'
import { INCREMENT, DECREMENT } from './reducer'

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ count: state })
    })
  }
  increment = () => {
    store.dispatch({type: INCREMENT})
  }
  decrement = () => {
    store.dispatch({type: DECREMENT})
  }
  render() {
    return (
        <div>
          <div>Count : {this.state.count}</div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
    )
  }
}

export default App
