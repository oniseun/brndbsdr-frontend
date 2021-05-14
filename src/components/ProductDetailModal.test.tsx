import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import ProductDetailModal from '../../src/components/ProductDetailModal';
  describe('ProductDetailModal />', () => {
    const productDetails = {name: "My Title" , photos:['x.png', 'y.png'], id:"f7f7f77ff7ss8", price:1000, currency:"NGN"}
    const component =<ProductDetailModal show={true} productDetail={productDetails}   handleClose={()=>{}} /> 
    it('mounts to get props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().show).to.equal(true);
      expect(Object.keys(wrapper.props().productDetail)).to.have.lengthOf(5)
      expect(wrapper.props().productDetail).to.have.property("photos")
      expect(wrapper.props().productDetail).to.have.property("name")
      expect(wrapper.props().productDetail).to.have.property("id")
      expect(wrapper.props().productDetail).to.have.property("price")
    });

    it('renders img, Carousel, Button and  Modal', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('img')).to.have.lengthOf(2)
      expect(wrapper.find('Carousel')).to.have.lengthOf(1)
      expect(wrapper.find('Button')).to.have.lengthOf(1)
      expect(wrapper.find('Modal')).to.have.lengthOf(1)
    });
  });