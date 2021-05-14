import React from 'react';
import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
import ProductDetailModal from '../../src/components/ProductDetailModal';
import { Button, Carousel, Modal } from "react-bootstrap";
  describe('ProductDetailModal />', () => {
    const productDetails = {name: "My Title" , photos:['x.png', 'y.png'], id:"f7f7f77ff7ss8", price:1000, currency:"NGN"}
    const component =<ProductDetailModal show={true} productDetails={productDetails}   handleClose={()=>{}} /> 
    it('allows us to getprops', () => {
      const wrapper = mount(component);
      expect(wrapper.props().show).toEqual(true);
      expect(wrapper.props().productDetails.photos.length).toEqual(2);
    });

    it('renders img, modal-header, modal-body, modal-footer and button', () => {
      const wrapper = shallow(component);
      expect(wrapper.find('<img />')).to.have.lengthOf(2)
      expect(wrapper.contains(<Carousel />)).toEqual(true);
      expect(wrapper.contains(<Carousel.Item />)).toEqual(true);
      expect(wrapper.contains(<Modal.Header />)).toEqual(true);
      expect(wrapper.contains(<Modal.Body />)).toEqual(true);
      expect(wrapper.contains(<Modal.Footer />)).toEqual(true);
      expect(wrapper.contains(<Button />)).toEqual(true);
    });
   
  });