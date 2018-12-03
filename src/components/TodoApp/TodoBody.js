import React from 'react'
import TodoItem from './TodoItem'

const TodoBody = (props) => {
  const { todos, toggleTodo, delTodo } = props
  return (
    <ul className="todo-body">
      {
        todos && todos.length ? todos.map((item, index) => {
          return (
            <TodoItem
              {...item}
              key={item.id}
              onComplete={() => toggleTodo(item.id)}
              onRemove={() => delTodo(item.id)}>
            </TodoItem>
          )
        }) : '什么都没有,写点东西吧!'
      }
    </ul>
  )
}

export default TodoBody