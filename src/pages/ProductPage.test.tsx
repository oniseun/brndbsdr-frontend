import React from 'react';
import { expect } from 'chai';
import { shallow} from 'enzyme';
import Product from '../../src/components/Product';
import ProductDetailModal from '../../src/components/ProductDetailModal';
import ProductPage from '../../src/pages/ProductPage'
  describe('<ProductPage />', () => {

    const component =<ProductPage products={[{}, {}]} /> 

    it('renders Product, ProductDetailModal, ul, h1', () => {
      const wrapper = shallow(component);
      expect(wrapper.contains(<Product />)).toEqual(true);
      expect(wrapper.contains(<ProductDetailModal/>)).toEqual(true);
      expect(wrapper.contains('<ul/>')).toEqual(true);
      expect(wrapper.contains('<h1 />')).toEqual(true);
    });
   
  });