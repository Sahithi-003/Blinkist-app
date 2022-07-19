import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

const renderHeader= () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>,
  );
};

it('header', () => {
    renderHeader();
});

it('explore', () => {
    renderHeader();
    const explore = screen.getByText('Explore');
    fireEvent.click(explore);
  });

  