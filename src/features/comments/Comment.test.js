import React from 'react'
import { shallow } from 'enzyme'
import {Comment} from './Comment'

let comment;

describe('Comment component', () => {
  beforeEach(() => {
    comment = {
      author: 'test mctest',
      score: 1000,
      body: 'test'
    }

  })
  it('renders succesfully', () => {
    shallow(<Comment comment={comment} />)
  })
  it('renders passed author formatted', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.find('#author').text()).toEqual('u/test mctest')
  })
  it('renders passed score', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.find('#score').text()).toEqual('1000')
  })
  it('renders passed body', () => {
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.find('#body').text()).toEqual('test')
  })
})