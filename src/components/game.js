import React from 'react'
import Card from './card'
import cardGraphics from '../cards'

export default React.createClass({
  getInitialState () {
    return {
      guessed: [],
      correct: []
    }
  },

  cardGuessed (e) {
    const newState = [e.index, ...this.state.guessed];
    this.setState({ guessed: newState }, () => {
      if (newState.length == 2) {
        setTimeout(() => this.compareCards(), 1000);
      }
    });
  },

  compareCards () {
    const guess1 = this.props.cards[this.state.guessed[0]];
    const guess2 = this.props.cards[this.state.guessed[1]];
    if (guess1 == guess2) {
      this.setState({ correct: [guess1, ...this.state.correct] })
    }
    this.setState({ guessed: [] })
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
                    isMatched={this.state.correct.indexOf(number) != -1}
                    onGuess={this.cardGuessed}
                  />
            )
          })}
        </div>
      </div>
    )
  }
})
