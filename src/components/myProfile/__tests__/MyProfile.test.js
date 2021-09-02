import React from 'react';
import { render, screen, fireEvent } from '../../../test-utils';
import MyProfile from '../MyProfile';
import Rockets from '../../rocket/Rockets';
import Missions from '../../mission/Missions';

describe('MyProfile', () => {
  it('renders page correctly', () => {
    const tree = render(<MyProfile />);
    expect(tree).toMatchSnapshot();
  });

  it('displays a column called My Missions', async () => {
    render(<MyProfile />);
    expect(await screen.findByText('My Missions')).toBeInTheDocument();
  });

  it('displays a column called My Rockets', async () => {
    render(<MyProfile />);
    expect(await screen.findByText('My Rockets')).toBeInTheDocument();
  });

  it('displays reserved rocket name', async () => {
    render(<Rockets />);
    expect(await screen.findByText('Reserve Rocket')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Reserve Rocket' }));
    render(<MyProfile />);
    expect(await screen.findByText('Falcon 1')).toBeInTheDocument();
  });

  it('displays joined mission name', async () => {
    render(<Missions />);
    expect(await screen.findByText('Join Mission')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Join Mission' }));
    render(<MyProfile />);
    expect(await screen.findByText('Thaicom')).toBeInTheDocument();
  });
});