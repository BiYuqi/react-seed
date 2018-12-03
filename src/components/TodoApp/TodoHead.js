import React from 'react'

export default class TodoHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  updateInput = (ev) => {
    this.setState({
      input: ev.target.value
    })
  }
  handleAddTodo = () => {
    if (!this.state.input) {
      return
    }
    this.props.onSubmitAdd({
      content: this.state.input,
      id: Date.now() + Math.floor((Math.random() * 999999 * Math.random() * 999999) / 999)
    })
    this.setState({
      input: ''
    })
  }
  render() {
    return (
      <div className="todo-head">
        <div className="form-wrap">
          <input
            type="text"
            placeholder="计划干点什么？"
            onChange={this.updateInput}
            value={this.state.input}/>
        </div>
        <button
          className="btn"
          onClick={this.handleAddTodo}>
          Add Item
        </button>
      </div>
    )
  }
}