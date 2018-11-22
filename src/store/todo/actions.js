import {
  ADD_TODO,
  TOOGLE_TODO,
  SET_FILTER
} from './actions-type'

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      content
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOOGLE_TODO,
    payload: {
      id
    }
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: {
      filter
    }
  }
}

