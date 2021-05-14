
import React from 'react';
import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import {Container, Nav, Navbar} from "bootstrap"
import Header from './Header';
import CountrySelection from '../components/CountrySelection'
  describe('<Header />', () => {
   const props =  {countryClickHandler: () => {}, logoutHandler: () => {}, 
   countryName : "Nigeria", currency: "NGN", countryCode :"NG", 
   isLoggedIn:true, firstname: "Ola", lastname :"Chris"}
    const component =<Header {...props} /> 
    it('allows us to get props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().firstname).toEqual("Ola");
      expect(wrapper.props().lastname).toEqual("Chris");
      expect(wrapper.props().isLoggedIn).to.be(true);
      expect(wrapper.props().countryName).toEqual("Nigeria");
      expect(wrapper.props().countryCode).toEqual("NG");
      expect(wrapper.props().price).toEqual(1000);
      expect(wrapper.props().currency).toEqual("NGN");
    });

    it('renders .navbar-brand, li, img, Container, Nav', () => {
      const wrapper = shallow(component);
      expect(wrapper.contains(<Navbar.Brand />)).toEqual(true);
      expect(wrapper.contains('<li/>')).toEqual(true);
      expect(wrapper.contains('<img />')).toEqual(true);
      expect(wrapper.find("<img />")).to.have.lengthOf(2);
      expect(wrapper.contains(<Container/>)).toEqual(true);
      expect(wrapper.contains(<Nav/>)).toEqual(true);
      expect(wrapper.contains(<CountrySelection/>)).toEqual(true);
    });
   
  });