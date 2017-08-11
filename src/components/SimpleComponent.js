// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }

  handleClick = () => {
    let moodSwings = {
      true: 'sad',
      false: 'happy'
    }
    this.setState({
      mood: moodSwings[(this.state.mood === 'happy')]
    })
  }
}

export default SimpleComponent
