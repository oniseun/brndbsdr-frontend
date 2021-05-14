
import { expect } from 'chai' ;
import { shallow} from 'enzyme';
import Header from './layout/Header'
import {Container} from "react-bootstrap"
import LoginPage from "./pages/LoginPage";
import App from './App'
  describe('<App />', () => {

    const component =<App /> 

    it('renders Header, LoginPage, Container', () => {
      const wrapper = shallow(component);
      expect(wrapper.contains(<Header />)).toEqual(true);
      expect(wrapper.contains(<LoginPage/>)).toEqual(true);
      expect(wrapper.contains(<Container/>)).toEqual(true);
    });
   
  });