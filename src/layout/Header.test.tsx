import { expect } from 'chai';
import { shallow, mount, render} from 'enzyme';
import Header from './Header';
  describe('<Header />', () => {
   const props =  {countryClickHandler: () => {}, logoutHandler: () => {}, 
   countryName : "Nigeria", currency: "NGN", countryCode :"NG", 
   isLoggedIn:true, firstname: "Ola", lastname :"Chris"}
    const component =<Header {...props} /> 
    it('mounts and get props', () => {
      const wrapper = mount(component);
      expect(Object.keys(wrapper.props())).to.have.lengthOf(8);
      expect(wrapper.props().firstname).to.equal("Ola");
      expect(wrapper.props().lastname).to.equal("Chris");
      expect(wrapper.props().isLoggedIn).to.be.true;
      expect(wrapper.props().countryName).to.equal("Nigeria");
      expect(wrapper.props().countryCode).to.equal("NG");
      expect(wrapper.props().currency).to.equal("NGN");
    });

    it('img, Container, Nav, CountrySelection', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('img')).to.have.lengthOf(1);
      expect(wrapper.find('Container')).to.have.lengthOf(2);
      expect(wrapper.find('Nav')).to.have.lengthOf(1);
      expect(wrapper.find('CountrySelection')).to.have.lengthOf(1);
    });

    it('renders .navbar-brand, .navbar-collapse, a, img, select, option', () => {
      const wrapper = render(component);
      expect(wrapper.find('.navbar-brand')).to.have.lengthOf(1);
      expect(wrapper.find('.navbar-collapse')).to.have.lengthOf(2);
      expect(wrapper.find('a')).to.have.lengthOf(1);
      expect(wrapper.find('img')).to.have.lengthOf(2);
      expect(wrapper.find('select')).to.have.lengthOf(1);
      expect(wrapper.find('option')).to.have.lengthOf(192);
    });
   
  });