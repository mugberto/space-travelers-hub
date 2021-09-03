import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import App from '../App';

describe('App', () => {
  it('renders page correctly', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('it loads "Rockets" on first render', async () => {
    render(<App />);
    expect(await screen.findByText('Falcon 1')).toBeInTheDocument();
  });

  it('navigates to Missions and displays missions', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'Missions' }));
    expect(await screen.findByText('Thaicom')).toBeInTheDocument();
  });

  it('navigates to "Profile" and displays user subscriptions', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'My Profile' }));
    expect(await screen.findByText('NO MISSIONS JOINED YET')).toBeInTheDocument();
    expect(await screen.findByText('NO ROCKET BOOKED YET')).toBeInTheDocument();
  });
});
