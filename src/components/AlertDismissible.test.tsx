import { expect } from 'chai';
import { mount, render } from 'enzyme';
import AlertDismissible from './AlertDismissible'

  describe('<AlertDismissbile />', () => {
    const component = <AlertDismissible showAlert={true} message="Hi!"/>
    it('mounts to get and set props', () => {
      const wrapper = mount(component);
      expect(wrapper.props().showAlert).to.equal(true);
      expect(wrapper.props().message).to.equal("Hi!");
      wrapper.setProps({ showAlert: false });
      expect(wrapper.props().showAlert).to.equal(false);
    });
    
    it('displays a message and has close button', () => {
      const wrapper = render(component);
      expect(wrapper.text()).to.contain('Hi!');
      expect(wrapper.find("button.close")).to.have.lengthOf(1);
    });
   
  });