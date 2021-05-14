import { expect } from 'chai';
import { shallow, mount, render} from 'enzyme';
import Product from '../../src/components/Product';

  describe('<Product />', () => {
    const component =<Product name="My Title" photos={['x.png', 'y.png']} id="f7f7f77ff7ss8" price={1000} currency="NGN"  onClickHandler={()=>{}} /> 
    it('mounts to get and set props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().name).to.equal("My Title");
      expect(wrapper.props().photos).to.have.lengthOf(2)
      expect(wrapper.props().id).to.equal("f7f7f77ff7ss8");
      expect(wrapper.props().price).to.equal(1000);
      expect(wrapper.props().currency).to.equal("NGN");
    });

    it('renders Button img, h5 and p', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('Button')).to.have.lengthOf(1);
      expect(wrapper.find('h5')).to.have.lengthOf(1);
      expect(wrapper.find('img')).to.have.lengthOf(1);
      expect(wrapper.find("p")).to.have.lengthOf(2);
    });

    it('renders Media.Body', () => {
      const wrapper = render(component);
      expect(wrapper.find('.media-body')).to.have.lengthOf(1);
    });
   
  });