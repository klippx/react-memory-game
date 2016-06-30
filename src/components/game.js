import React from 'react'
import Card from './card'
import cardGraphics from '../cards'

export default React.createClass({
  render () {
    console.log(this.props.cards)

    return (
      <div>
        <h1>This is the Game component</h1>
        <div className='cards'>
          {this.props.cards.map((number, i) => {
            return <Card cardGraphic={cardGraphics[number]} number={i} />
          })}
        </div>
      </div>
    )
  }
})
