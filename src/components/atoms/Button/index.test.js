import React from 'react'
import { mount, shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Button from '.'

const wrapWithShallow = (props = {}) => shallow(<Button {...props} />)
const wrapWithMount = (props = {}) => mount(<Button {...props} />)

describe('<Button />', () => {
  it('renders with disable', () => {
    const wrapper = wrapWithMount({ disabled: true })
    expect(wrapper.find({ disabled: true }))
  })

  it('renders with transparent effect', () => {
    const wrapper = wrapWithMount({ transparent: true })
    expect(wrapper.find({ transparent: true }))
  })

  it('renders with disable and transparent props', () => {
    const wrapper = wrapWithMount({ disabled: true, transparent: true })
    expect(wrapper.find({ disabled: true, transparent: true }))
  })

  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow({ children: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ type: 'submit' })
    expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
  })

  it('renders button by default', () => {
    const wrapper = wrapWithMount()
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('renders anchor when href is passed in', () => {
    const wrapper = wrapWithMount({ href: 'test' })
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('renders Link when to is passed in', () => {
    const props = { to: 'test' }
    const wrapper = mount(
      <BrowserRouter>
        <Button {...props} />
      </BrowserRouter>
    )
    expect(wrapper.find('Link')).toHaveLength(1)
  })
})
