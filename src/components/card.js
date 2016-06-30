import React from 'react'

export default React.createClass({
  getDefaultProps () {
    return {
      isFlipped: true
    }
  },

  render () {
    return (
      <div className={this.divClassNames()}>
        <a>
          <div className='card-icon'
               styles={this.props.cardGraphic.backgroundColor}
               dangerouslySetInnerHTML={{__html: this.props.cardGraphic.svg}} />
          <h2>{this.props.cardGraphic.label}</h2>
        </a>
      </div>
    )
  },

  divClassNames () {
    if (this.props.isFlipped) {
      return 'card rotate'
    } else {
      return 'card'
    }

  }
})
