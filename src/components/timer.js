import React from 'react'
import Spinner from './spinner'

export default React.createClass({
  getInitialState () {
    return {
      timeRemaining: 90
    }
  },

  componentWillMount () {
    this.interval = setInterval(() => this.tick(), 1000)
  },

  componentWillUnmount () {
    clearInterval(this.interval)
  },

  tick () {
    this.setState({
      timeRemaining: this.state.timeRemaining - 1
    })
  },

  formattedTime () {
    return `${this.state.timeRemaining}`
  },

  render () {
    return (
      <div className='timer'>
        <Spinner />
        <p>
          {this.formattedTime()}
        </p>
      </div>
    )
  }
});