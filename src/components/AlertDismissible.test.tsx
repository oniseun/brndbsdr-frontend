

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import AlertDismissible from './AlertDismissible'

  describe('<AlertDismissbile />', () => {
    const component = <AlertDismissible showAlert={true} message="Hi!"/>
    it('allows us to get and set props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().showAlert).toEqual(true);
      expect(wrapper.props().message).toEqual("Hi!");
      wrapper.setProps({ showAlert: false });
      expect(wrapper.props().showAlert).toEqual(false);
    });
    
    it('displays a message', () => {
      const wrapper = render(component);
      expect(wrapper.text()).toContain('Hi!');
    });

    it('renders 1 button', () => {
      const wrapper = shallow(component);
      expect(wrapper.find("<button>")).to.have.lengthOf(1);
    });
   
  });