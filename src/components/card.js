import React from 'react'

export default React.createClass({
  render () {
    console.log(this.props.cardGraphic.label)
    return (
      <p>This is card #{this.props.number}</p>
    )
  }
})
