import React from 'react'
import cx from 'classnames'

const currentActiveClassName = (current, dynamic) => {
  return cx(dynamic === current && `filter-active`)
}
const todoFilter = ({ setFilter, visibilityFilter }) => {
  return (
    <div className="filter-part">
      <button
        className={currentActiveClassName('all', visibilityFilter)}
        onClick={() => setFilter('all')}>
        All
      </button>
      <button
        className={currentActiveClassName('completed', visibilityFilter)}
        onClick={() => setFilter('completed')}>
        Compleated
      </button>
      <button
        className={currentActiveClassName('incomplete', visibilityFilter)}
        onClick={() => setFilter('incomplete')}>
        Incomplete
      </button>
    </div>
  )
}
export default todoFilter