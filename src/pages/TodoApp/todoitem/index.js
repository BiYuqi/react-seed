import React from 'react'
import cx from 'classnames'

import './index.scss'

const TodoItem = ({ onClick, completed, content }) => {
  return (
    <li className={cx(
      'todo-item',
      completed && 'todo-item-completed' )} onClick={onClick} >
      {content}
    </li>
  )
}

export default TodoItem