import React from 'react'
import { shallow } from 'enzyme'
import { CommentList } from './CommentList'
import { Comment } from './Comment'

let comments;

describe('CommentList component', () => {
  beforeEach(() => {
    comments = [
      {
        id: 1,
        author: 'test_1',
        score: 1,
        body: 'test_1'
      },      
      {
        id: 2,
        author: 'test_2',
        score: 2,
        body: 'test_2'
      },      
      {
        id: 2,
        author: 'test_2',
        score: 2,
        body: 'test_2'
      },      
    ]
  })
  it('renders with no comments', () => {
    shallow(<CommentList />)
  })
  it('renders with comments', () => {
    shallow(<CommentList comments={comments} />)
  })
  it('renders the correct number of comments', () => {
    const wrapper = shallow(<CommentList comments={comments} />)
    expect(wrapper.find(Comment).length).toEqual(3)
  })
})