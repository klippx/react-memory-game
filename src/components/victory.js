import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='game-over'>
        <p>VICTORY!</p>
        <div className='message' onClick={this.props.playAgain()}>
          You are victorious, son...
          Play again?
        </div>
      </div>
    )
  }
})