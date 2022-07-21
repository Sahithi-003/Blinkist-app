import {render,screen } from '@testing-library/react'
import Buttons from './Components/Atoms/Buttons/ReadAndFinished';
import { Typography } from '@mui/material'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom';


const renderHeader= () => {
    render(
      <BrowserRouter>
        <LoginPage></LoginPage>
      </BrowserRouter>,
    );
  };
  
  it('header', () => {
      renderHeader();
  });
  test("Testing Login box", () => {
    render(<LoginPage />);
    const element = screen.getByTestId("Login-Box");
    expect(element).toBeTruthy();
  });
  
  test("Testing login button", () => {
    render(<LoginPage />);
    // eslint-disable-next-line testing-library/await-async-query
    const element = screen.findByRole("button",{name:"Log in"});
    expect(element).toBeTruthy();
  });
