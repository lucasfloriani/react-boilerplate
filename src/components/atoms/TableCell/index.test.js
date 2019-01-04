import React from 'react'
import { mount, shallow } from 'enzyme'
import TableCell from '.'

const wrapWithShallow = (props = {}) => shallow(<TableCell {...props} />)

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
    const wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    )
    expect(wrapper.find('td')).toHaveLength(1)
  })

  it('renders th when prop heading is passed in', () => {
    const props = { heading: true }
    const wrapper = mount(
      <table>
        <thead>
          <tr>
            <TableCell {...props} />
          </tr>
        </thead>
      </table>
    )
    expect(wrapper.find('th')).toHaveLength(1)
  })
})
