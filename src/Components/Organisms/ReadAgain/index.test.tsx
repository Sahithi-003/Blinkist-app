import { fireEvent, render, screen } from '@testing-library/react';
import ReadAgain from './index';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios"

const renderFunction = () => {
    render(
      <BrowserRouter>
        <ReadAgain id={1}          
        ></ReadAgain>
      </BrowserRouter>,
    );
  };

it('should have finished button', () => {
    renderFunction();
    const ReadAgain = screen.getByRole('button', { name: /Read Again/i });
    expect(ReadAgain).toBeInTheDocument();
  });
  
