import React from 'react'
import Card from './card'
import cardGraphics from '../cards'
import GameOver from './game-over'
import Victory from './victory'
import Timer from './timer'

export default React.createClass({
  getInitialState () {
    return {
      allowGuess: true,
      gameOver: false,
      guessed: [],
      correct: [],
      duration: 60
    }
  },

  cardGuessed (e) {
    const newState = [e.index, ...this.state.guessed];
    if (newState.length == 2) {
      this.setState({ allowGuess: false, guessed: newState }, () => {
        setTimeout(() => this.compareCards(), 500);
      })
    } else {
      this.setState({ guessed: newState })
    };
  },

  compareCards () {
    const guess1 = this.props.cards[this.state.guessed[0]];
    const guess2 = this.props.cards[this.state.guessed[1]];
    if (guess1 == guess2) {
      this.setState({ correct: [guess1, ...this.state.correct] })
      this.checkIfVictory();
    }
    this.setState({ allowGuess: true, guessed: [] })
  },

  checkIfVictory () {
    if (this.state.correct.length*2 === this.props.cards.length) {
      this.setState({ victory: true })
    }
  },

  playAgain () {
    this.setState({
      allowGuess: true,
      gameOver: false,
      guessed: [],
      correct: []
    })
  },

  render () {
    let gameOver = <div />;
    if (this.state.gameOver) {
      gameOver = <GameOver />;
    }

    let victoryScreen = <div />;
    if (this.state.victory) {
      victoryScreen = <Victory playAgain={this.playAgain} />;
    }

    return (
      <div className='play-view'>
        <Timer duration={this.state.duration} />
        <div className='cards'>
          {gameOver}
          {victoryScreen}
          {this.props.cards.map((number, i) => {
            return (
              <Card key={`card-${i}`}
                    cardGraphic={cardGraphics[number]}
                    index={i}
                    isGuessed={this.state.guessed.indexOf(i) != -1}
                    isMatched={this.state.correct.indexOf(number) != -1}
                    allowGuess={this.state.allowGuess}
                    onGuess={this.cardGuessed}
                  />
            )
          })}
        </div>
      </div>
    )
  }
})
