import React from 'react'
import { connect } from 'react-redux'
import { addTodo, setFilter, toggleTodo, delTodo } from '../store/todo/actions'
import TodoHead from '../components/TodoApp/TodoHead'
import TodoBody from '../components/TodoApp/TodoBody'
import TodoFilter from '../components/TodoApp/TodoFilter'

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
    onSubmitAdd: todo => dispatch(addTodo(todo)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    setFilter: type => dispatch(setFilter(type)),
    delTodo: id => dispatch(delTodo(id))
  }
}
// 两种方法传递 dispatch事件
export default connect(
  mapStateToProps,
  // 第一种，显式传递 mapDispatchToProps
  mapDispatchToProps
  // 第二种, prop到actions映射
  // {
  //   onSubmitAdd: addTodo,
  //   toggleTodo,
  //   setFilter
  // }
)(TodoHeadComponent)