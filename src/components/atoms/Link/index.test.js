import React from 'react'
import { mount, shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Link from '.'

const wrapWithShallow = (props = {}) => shallow(<Link {...props} />)
const wrapWithMount = (props = {}) => mount(<Link {...props} />)

describe('<Link />', () => {
  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders anchor by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('renders Link when prop to is passed in', () => {
    const props = { to: 'test' }
    const wrapper = mount(
      <BrowserRouter>
        <Link {...props} />
      </BrowserRouter>
    )
    expect(wrapper.find('NavLink')).toHaveLength(1)
  })
})
