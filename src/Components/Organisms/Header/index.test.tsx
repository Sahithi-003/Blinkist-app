import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import Buttons from "../../Atoms/Buttons/Buttons"

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
 
it('MyLibrary', () => {
  renderHeader();
  const lib = screen.getByText('My Library');
  fireEvent.click(lib);
});

test("Header Test",async () => {
  render(<BrowserRouter> <Header /> </BrowserRouter>);
  const headerElement = screen.getAllByRole("img");
  expect(headerElement).toHaveLength(1);
})

test("Header Library click Test",async () => {
  render(<BrowserRouter> <Header /> </BrowserRouter>);
  const headerElement = screen.getByText("My Library");
  fireEvent.click(headerElement);

  const changedElement = screen.getByText("My Library");
  expect(changedElement).toBe(headerElement);
})

test("Header Explore click Test",async () => {
  render(<BrowserRouter> <Header/> </BrowserRouter>);
  const headerElement = screen.getByText("Explore");
  fireEvent.click(headerElement);

  const changedElement = screen.getByText("Explore");
  expect(changedElement).toBe(headerElement);
})



// test("Header Account Icon click Test",async () => {
//   render(<BrowserRouter> <Header/> </BrowserRouter>);
//   const headerElement = screen.getByTestId(/PersonIcon/i);
//   expect(headerElement).toBe(headerElement);
// }) 