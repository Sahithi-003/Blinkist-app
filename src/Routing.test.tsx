import { fireEvent, render, screen } from '@testing-library/react';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';

const renderHeader= () => {
  render(
      <Routing></Routing>
    
  );
};

it('header', () => {
    renderHeader();
});