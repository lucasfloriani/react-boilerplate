import React from 'react'
import { shallow, mount } from 'enzyme'
import List from '.'

const wrapWithShallow = (props = {}) => shallow(<List {...props} />)
const wrapWithMount = (props = {}) => mount(<List {...props} />)

describe('<List />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders ul by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('ul')).toHaveLength(1)
  })
})
