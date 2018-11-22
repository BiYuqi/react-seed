import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '@/store/todo/actions'
import './index.scss'

class TodoHead extends React.Component {
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
    this.props.addTodo(this.state.input)
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
          onClick={this.handleAddTodo}>Add Item</button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(TodoHead)