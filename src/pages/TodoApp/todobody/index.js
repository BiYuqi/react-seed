import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '@/store/todo/actions'

import TodoItem from '../todoitem'

const TodoBody = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-body">
      {
        todos && todos.length ? todos.map((item, index) => {
          return (
            <TodoItem key={index} {...item} onClick={() => toggleTodo(index)}></TodoItem>
          )
        }) : '什么都没有,写点东西吧!'
      }
    </ul>
  )
}

const mapStateToProps = state => {
  const todos = state.todoItem.todoList
  return { todos }
}

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoBody)