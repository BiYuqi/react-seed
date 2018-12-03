import React from 'react'
import cx from 'classnames'

const TodoItem = ({ onComplete, onRemove, completed, content, id }) => {
  return (
    <li className={cx(
      'todo-item',
      completed && 'todo-item-completed' )}
      data-id={id}>
      <span onClick={onComplete}>{content}</span>
      <button onClick={onRemove}>删除</button>
    </li>
  )
}

export default TodoItem