import React from 'react';
import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import CountrySelection from '../../src/components/CountrySelection';

  describe('<CountrySelection />', () => {
    const component =<CountrySelection  countryName="Nigeria" countryCode="NG" currency="NGN" onClickHandler={()=>{}} /> 
    it('allows us to get and set props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().countryName).toEqual("Nigeria");
      expect(wrapper.props().countryCode).toEqual("NG");
      expect(wrapper.props().currency).toEqual("NGN");
    });

    it('renders option, img and label', () => {
      const wrapper = shallow(component);
      expect(wrapper.contains('<option />')).toEqual(true);
      expect(wrapper.contains('<img />')).toEqual(true);
      expect(wrapper.contains('<label />')).toEqual(true);
    });
   
  });