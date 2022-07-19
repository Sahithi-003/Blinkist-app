import { render, screen } from '@testing-library/react';
import Footer from "./Footer";

it('banner image', () => {
  render(<Footer></Footer>);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'Blinkist.png');
  expect(image).toHaveAttribute('alt', 'logo');
});

test("Testing Footer", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer");
    expect(element).toBeTruthy();
  });
  
  test("Testing Footer grid1", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer grid1");
    expect(element).toBeTruthy();
  });
  
  test("Testing Footer grid2", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer grid2");
    expect(element).toBeTruthy();
  });

  test("Testing Footer grid3", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer grid3");
    expect(element).toBeTruthy();
  });

  test("Testing Footer grid4", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer grid4");
    expect(element).toBeTruthy();
  });

  test("Testing Footer grid5", () => {
    render(<Footer />);
    const element = screen.getByTestId("Footer grid5");
    expect(element).toBeTruthy();
  });