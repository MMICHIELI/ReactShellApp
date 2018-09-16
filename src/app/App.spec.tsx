import * as React from 'react'
import { shallow } from 'enzyme'

// Tested
import App from './App'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  })
});
