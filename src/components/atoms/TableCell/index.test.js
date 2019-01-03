import React from 'react'
import { mount, shallow } from 'enzyme'
import TableCell from '.'

const wrapWithShallow = (props = {}) => shallow(<TableCell {...props} />)
const wrapWithMount = (props = {}) => mount(<TableCell {...props} />)

describe('<TableCell />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders td by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('td')).toHaveLength(1)
  })

  it('renders th when prop heading is passed in', () => {
    const wrapper = wrapWithMount({ heading: true })
    expect(wrapper.find('th')).toHaveLength(1)
  })
})
