import React from 'react'
import { shallow } from 'enzyme'
import GenericPage from '.'

describe('<GenericPage />', () => {
  it('renders', () => {
    shallow(<GenericPage />)
  })
})
