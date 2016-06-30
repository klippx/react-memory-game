import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className={`card ${this.guessed()}`} onClick={this.guess}>
        <a>
          <div className='card-icon'
               styles={this.props.cardGraphic.backgroundColor}
               dangerouslySetInnerHTML={{__html: this.props.cardGraphic.svg}} />
          <h2>{this.props.cardGraphic.label}</h2>
        </a>
      </div>
    )
  },

  guess () {
    this.props.onGuess({index: this.props.index})
  },

  guessed () {
    if (this.props.isGuessed || this.props.isMatched) {
      return ''
    } else {
      return 'rotate'
    }
  }
})
