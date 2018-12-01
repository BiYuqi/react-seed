import React from 'react'
import { connect } from 'react-redux'
import { addTodo, setFilter, toggleTodo } from '@/store/todo/actions'
import TodoHead from '@/components/TodoApp/todohead/index'
import TodoBody from '@/components/TodoApp/todobody/index'
import TodoFilter from '@/components/TodoApp/todoFilter/index'

class TodoHeadComponent extends React.Component {
  render() {
    return (
      <div>
        <TodoHead {...this.props}/>
        <TodoFilter {...this.props} />
        <TodoBody {...this.props}/>
      </div>
    )
  }
}

const todoFilter = (todos, filter) => {
  switch (filter) {
    case 'incomplete':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}
const mapStateToProps = state => {
  const todos = todoFilter(state.todoItem.todoList, state.visibilityFilter)
  return {
    todos,
    visibilityFilter: state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAdd: (todo) => {
      dispatch(addTodo(todo))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    setFilter: (type) => {
      dispatch(setFilter(type))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeadComponent)