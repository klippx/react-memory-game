import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='card'
           styles={this.props.cardGraphic.backgroundColor}
           dangerouslySetInnerHTML={{__html: this.props.cardGraphic.svg}}>
      </div>
    )
  }
})
