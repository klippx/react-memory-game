import React from 'react'
import Card from './card'
import cardGraphics from '../cards'

export default React.createClass({
  getInitialState () {
    return {
      guessed: []
    }
  },

  cardGuessed (e) {
    const newState = [e.index, ...this.state.guessed];
    this.setState({ guessed: newState });
    console.log('Card guessed', newState)
  },

  render () {
    return (
      <div className='play-view'>
        <h1>This is the Game component</h1>
        <div className='cards'>
          {this.props.cards.map((number, i) => {
            return (
              <Card key={`card-${i}`}
                    cardGraphic={cardGraphics[number]}
                    index={i}
                    isGuessed={this.state.guessed.indexOf(i) != -1}
                    onGuess={this.cardGuessed}
                  />
            )
          })}
        </div>
      </div>
    )
  }
})
