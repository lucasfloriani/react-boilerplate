import React from 'react'
import { shallow } from 'enzyme'
import SamplePage from '.'

describe('<SamplePage />', () => {
  it('renders', () => {
    shallow(<SamplePage />)
  })
})
