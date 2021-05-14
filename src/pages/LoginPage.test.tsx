
import { expect } from 'chai';
import { shallow, render} from 'enzyme';
import LoginPage from './LoginPage'
  describe('<LoginPage />', () => {

    const component =<LoginPage loginHandler={() => {}} /> 

    it('renders Form Col Button', () => {
      const wrapper = shallow(component );
      expect(wrapper.find('Form')).to.have.lengthOf(1);
      expect(wrapper.find('Col')).to.have.lengthOf(1);
      expect(wrapper.find('Button')).to.have.lengthOf(1)
    });

    it('renders .form-row, form-group, input', () => {
      const wrapper = render(component );
      expect(wrapper.find('.form-row')).to.have.lengthOf(1);
      expect(wrapper.find('.form-group')).to.have.lengthOf(2);
      expect(wrapper.find('input')).to.have.lengthOf(2);
    });
   
  });