import Game from '../components/game'
import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      gameRunning: false,
      cards: [1,2,3,4,1,2,3,4,6,7,8,9,6,7,8,9]
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
