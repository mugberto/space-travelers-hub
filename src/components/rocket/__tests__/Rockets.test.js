import React from 'react';
import { render } from '../../../test-utils';
import Rockets from '../Rockets';

describe('Rockets', () => {
  it('renders page correctly', () => {
    const tree = render(<Rockets />);
    expect(tree).toMatchSnapshot();
  });
});
