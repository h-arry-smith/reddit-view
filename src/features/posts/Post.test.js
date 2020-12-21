import React from 'react'
import { shallow } from 'enzyme'
import {Post} from './Post'

describe('Post component', () => {
  it ('renders succesfully', () => {
    shallow(<Post post={{}}/>);
  })
  it ('renders thumbnail when present', () => {
    const wrapper = shallow(<Post post={{thumbnail: 'img.png'}} />);
    expect(wrapper.find('img').prop('src')).toEqual('img.png')
  })
  it ('renders formatted subreddit', () => {
    const wrapper = shallow(<Post post={{subreddit: 'test'}} />)
    expect(wrapper.find('#subreddit').text()).toEqual('r/test')
  })
  it ('renders formatted author', () => {
    const wrapper = shallow(<Post post={{author: 'test'}} />)
    expect(wrapper.find('#author').text()).toEqual('u/test')
  })
  it ('renders passed title', () => {
    const wrapper = shallow(<Post post={{title: 'test'}} />)
    expect(wrapper.find('#title').text()).toEqual('test')
  })
  it ('renders passed score', () => {
    const wrapper = shallow(<Post post={{score: 1000}} />)
    expect(wrapper.find('#score').text()).toEqual('1000')
  })
})