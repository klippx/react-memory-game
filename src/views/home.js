import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      gameRunning: false
    }
  },

  render () {
    let body = (
      <button onClick={this.startNewGame}>
        New game
      </button>
    )

    if (this.state.gameRunning) {
      body = (<p>Placeholder for Game Component</p>)
    }

    return (
      <div className='home-view'>
        <h1>React Memory Game</h1>
        {body}
      </div>
    )
  },

  startNewGame () {
    this.setState({gameRunning: true})
    console.log('Starting new game...')
  }
})
