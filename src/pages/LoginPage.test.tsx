
import React from 'react';
import { expect } from 'chai';
import { shallow} from 'enzyme';
import { Button, Col, Form } from "react-bootstrap";
import LoginPage from './LoginPage'
  describe('<LoginPage />', () => {

    const component =<LoginPage loginHandler={() => {}} /> 

    it('renders input, form row, form group, form control, col, button', () => {
      const wrapper = shallow(component);
      expect(wrapper.contains('<input />')).toEqual(true);
      expect(wrapper.contains(<Form.Row/>)).toEqual(true);
      expect(wrapper.contains(<Form.Group/>)).toEqual(true);
      expect(wrapper.contains(<Form.Control/>)).toEqual(true);
      expect(wrapper.contains(<Col/>)).toEqual(true);
      expect(wrapper.contains(<Button/>)).toEqual(true);
    });
   
  });