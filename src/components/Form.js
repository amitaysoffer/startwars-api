import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    this.props.handleChange(e)
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">Name of Character</span>
        </div>
        <input onChange={this.handleInput} type="text" className="form-control"></input>
      </div>
    )
  }
}

export default Form