import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import CountrySelection from '../../src/components/CountrySelection';

  describe('<CountrySelection />', () => {
    const component =<CountrySelection  countryName="Nigeria" countryCode="NG" currency="NGN" onClickHandler={()=>{}} /> 
    it('allows us to get and set props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().countryName).to.equal("Nigeria");
      expect(wrapper.props().countryCode).to.equal("NG");
      expect(wrapper.props().currency).to.equal("NGN");
    });

    it('renders option and img', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('option')).to.have.lengthOf(192);
      expect(wrapper.find('img')).to.have.lengthOf(1);
    });
   
  });