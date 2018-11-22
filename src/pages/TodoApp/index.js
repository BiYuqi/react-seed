import React from 'react'

import TodoHead from './todohead'
import TodoBody from './todobody'

import './index.scss'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-wrap">
        <div className="todo-title">Todo List</div>
        <TodoHead></TodoHead>
        <TodoBody></TodoBody>
      </div>
    )
  }
}