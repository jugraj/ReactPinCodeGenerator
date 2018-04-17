import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Pincard from './components/pincard';
import PinScreen from './components/pinscreen';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should update pin num', () => {
        const wrapper = shallow(<Pincard />);
        wrapper.instance().updatePin(2);
        wrapper.setState({enabled: false});
        
});

it('should receive value in Pinscreen', () => {
        const wrapper = shallow(<PinScreen value='2'/>);
		expect(wrapper.prop('value')).toEqual('2');
});



