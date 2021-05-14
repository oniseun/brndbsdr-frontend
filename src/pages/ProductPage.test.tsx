import { expect } from 'chai';
import { shallow} from 'enzyme';
import ProductPage from '../../src/pages/ProductPage'
  describe('<ProductPage />', () => {

    const component =<ProductPage products={[{id: 1}, { id:2}]} /> 

    it('renders Product, ProductDetailModal, ul, h1', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('Product')).to.have.lengthOf(2);
      expect(wrapper.find('ProductDetailModal')).to.have.lengthOf(1);
      expect(wrapper.find('ul')).to.have.lengthOf(1);
      expect(wrapper.find('h1')).to.have.lengthOf(1);
    });
   
  });