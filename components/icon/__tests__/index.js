/**
 * @author renmaomin@126.com
 */
import React from 'react';
import { shallow, render } from 'enzyme';
import Icon from '..';

describe('Button suite', () => {
  it('render a icon', () => {
    const wrapper = shallow(<Icon type="artboardAdd" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render a big icon', () => {
    const wrapper = render(<Icon type="batchExport" size="large" />);
    expect(wrapper).toMatchSnapshot();
  });
});
