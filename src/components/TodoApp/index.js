import React from 'react'

import TodoContainer from '../../containers/todoapp'

import './index.scss'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-wrap">
        <div className="todo-title">Todo-List</div>
        <TodoContainer />
      </div>
    )
  }
}