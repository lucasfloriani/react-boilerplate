import React from 'react'
import { mount, shallow } from 'enzyme'
import Heading from '.'

const wrapWithShallow = (props = {}) => shallow(<Heading {...props} />)
const wrapWithMount = (props = {}) => mount(<Heading {...props} />)

describe('<Heading />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders h1 by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('h1')).toHaveLength(1)
  })

  it('renders hLevel when level is passed in', () => {
    const wrapper = wrapWithMount({ level: 2 })
    expect(wrapper.find('h2')).toHaveLength(1)
  })
})
