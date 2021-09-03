import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import Rockets from '../Rockets';

describe('Rockets', () => {
  it('renders page correctly', () => {
    const tree = render(<Rockets />);
    expect(tree).toMatchSnapshot();
  });

  it('updates the UI with loaded Rockets', async () => {
    render(<Rockets />);
    expect(await screen.findByText('Falcon 1')).toBeInTheDocument();
  });

  it('displays "Reserve Rocket" button', async () => {
    render(<Rockets />);
    expect(await screen.findByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('turns Reserve Rocket button to Cancel Reservation button after click', async () => {
    render(<Rockets />);
    expect(await screen.findByText('Reserve Rocket')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Reserve Rocket' }));
    expect(await screen.findByText('Cancel Reservation')).toBeInTheDocument();
  });
});
