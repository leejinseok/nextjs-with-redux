import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
  static async getInitialProps () {
    return {}
  } 

  increment = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'INCREMENT'
    })
  }

  decrement = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'DECREMENT'
    })
  }

  reset = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'RESET'
    })
  }

  render() {
    const { count } = this.props
    
    return (
      <div className="IndexPage">
        <h1>Hello, Next.js With Redux Simple Example (Count)</h1>
        <h2>{ count }</h2>
        <div>
          <button onClick={this.increment}>
            +
          </button>
          <button onClick={this.decrement}>
            -
          </button>
          <button onClick={this.reset}>
            Reset
          </button>
        </div>
        <style jsx>{`
          .IndexPage {
            text-align: center;
          }
        `}
        </style>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count } = state
  return { count }
}

export default connect(mapStateToProps)(Index)
