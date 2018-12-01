import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOOGLE_TODO,
  SET_FILTER
} from './actions-type'

const initialState = {
  todoList: []
}

export const todoItem = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: 
      const { content, id } = action.payload
      return {
        ...state,
        todoList: [
          {
            content,
            id,
            completed: false
          },
          ...state.todoList
        ]
      }
    case TOOGLE_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todoList: state.todoList.map((todo, i) => {
          if (todo.id === id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      }
    }
    default: 
      return state
  }
}

export const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: 
      return state
  }
}

export default combineReducers({
  todoItem,
  visibilityFilter
})