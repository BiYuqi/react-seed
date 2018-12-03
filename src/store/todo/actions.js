import {
  ADD_TODO,
  TOOGLE_TODO,
  SET_FILTER,
  DEL_TODO
} from './actions-type'

export const addTodo = (data) => {
  const { content, id } = data
  return {
    type: ADD_TODO,
    payload: {
      content,
      id
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

export const delTodo = (id) => {
  return {
    type: DEL_TODO,
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

