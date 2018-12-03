import React from 'react'
import TodoItem from './TodoItem'

const TodoBody = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-body">
      {
        todos && todos.length ? todos.map((item, index) => {
          return (
            <TodoItem key={item.id} {...item} onClick={() => toggleTodo(item.id)}></TodoItem>
          )
        }) : '什么都没有,写点东西吧!'
      }
    </ul>
  )
}

export default TodoBody