import React from 'react'
import { shallow, render } from 'enzyme'
import { expect } from 'chai'
import App from './index'

describe('Enzyme shallow', () => {
  it("The App's header title must return Todo List", () => {
    let wrapper = shallow(<App />)
    console.log(wrapper.find('.todo-title'))
    expect(wrapper.find('.todo-title').text()).to.equal('Todo-List')
  })
})