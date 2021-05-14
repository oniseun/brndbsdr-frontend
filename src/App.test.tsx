
import { expect } from 'chai' ;
import { shallow, render} from 'enzyme';
import App from './App'
  describe('<App />', () => {

    const component =<App /> 

    it('renders Header, LoginPage, Container', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('Header')).to.have.lengthOf(1);
      expect(wrapper.find('LoginPage')).to.have.lengthOf(1);
      expect(wrapper.find('Container')).to.have.lengthOf(1);
    });

    it('renders Header, LoginPage, Container', () => {
      const wrapper = render(component);
      expect(wrapper.find('form')).to.have.lengthOf(1);
      expect(wrapper.find('.form-row')).to.have.lengthOf(1);
      expect(wrapper.find('.form-group')).to.have.lengthOf(2);
      expect(wrapper.find('input')).to.have.lengthOf(2);
    });
   
  });