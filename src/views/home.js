import Game from '../components/game'
import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      gameRunning: false,
      cards: [1,2,3,1,2,3],
    }
  },

  render () {
    let body = (
      <button onClick={this.startNewGame}>
        New game
      </button>
    )

    if (this.state.gameRunning) {
      body = (<Game cards={this.state.cards} />)
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
