import React from 'react';
import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import Product from '../../src/components/Product';
import {Media, Button} from 'react-bootstrap'

  describe('<Product />', () => {
    const component =<Product name="My Title" photos={['x.png', 'y.png']} id="f7f7f77ff7ss8" price={1000} currency="NGN"  onClickHandler={()=>{}} /> 
    it('allows us to get and set props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().name).toEqual("My Title");
      expect(wrapper.props().photos).to.eq(['x.png', 'y.png'])
      expect(wrapper.props().id).toEqual("f7f7f77ff7ss8");
      expect(wrapper.props().price).toEqual(1000);
      expect(wrapper.props().currency).toEqual("NGN");
    });

    it('renders Media.Body,Button img, h5 and p', () => {
      const wrapper = shallow(component);
      expect(wrapper.contains(<Media.Body/>)).toEqual(true);
      expect(wrapper.contains(<Button />)).toEqual(true);
      expect(wrapper.contains('<h5/>')).toEqual(true);
      expect(wrapper.contains('<img />')).toEqual(true);
      expect(wrapper.find("<p/>")).to.have.lengthOf(2);
    });
   
  });