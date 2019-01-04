import React from 'react'
import { mount, shallow } from 'enzyme'
import Tooltip, { opposite, perpendicular, perpendicularAxis } from '.'

const wrapWithShallow = (props = {}) => {
  return shallow(<Tooltip data-title="title" {...props}><span>test</span></Tooltip>)
}
const wrapWithMount = (props = {}) => {
  return mount(<Tooltip data-title="title" {...props}><span>test</span></Tooltip>)
}

describe('<Tooltip />', () => {
  it('render with align start prop', () => {
    const wrapper = wrapWithMount({ align: 'start' })
    expect(wrapper.exists()).toBe(true)
  })

  it('render with align end prop', () => {
    const wrapper = wrapWithMount({ align: 'end' })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders children when passed in', () => {
    const wrapper = wrapWithShallow()
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrapWithShallow({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders data-title', () => {
    const wrapper = wrapWithShallow()
    expect(wrapper.find({ 'data-title': 'title' })).toHaveLength(1)
  })

  it('renders tabIndex', () => {
    const wrapper = wrapWithShallow()
    expect(wrapper.find({ tabIndex: 0 })).toHaveLength(1)
  })

  test('opposite', () => {
    expect(opposite({ position: 'top' })).toBe('bottom')
    expect(opposite({ position: 'right' })).toBe('left')
    expect(opposite({ position: 'bottom' })).toBe('top')
    expect(opposite({ position: 'left' })).toBe('right')
  })

  test('perpendicular', () => {
    expect(perpendicular({ position: 'top' })).toBe('left')
    expect(perpendicular({ position: 'right' })).toBe('top')
    expect(perpendicular({ position: 'bottom' })).toBe('left')
    expect(perpendicular({ position: 'left' })).toBe('top')
  })

  test('perpendicularAxis', () => {
    expect(perpendicularAxis({ position: 'top' })).toBe('X')
    expect(perpendicularAxis({ position: 'right' })).toBe('Y')
    expect(perpendicularAxis({ position: 'bottom' })).toBe('X')
    expect(perpendicularAxis({ position: 'left' })).toBe('Y')
  })
})
