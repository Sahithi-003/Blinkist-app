import { render, screen } from '@testing-library/react';
import Banner from './Banner';

it('banner image', () => {
  render(<Banner></Banner>);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'bannerimg.png');
  expect(image).toHaveAttribute('alt', 'Banner');
});

test("Testing Banner", () => {
    render(<Banner />);
    const element = screen.getByTestId("Banner");
    expect(element).toBeTruthy();
  });
  
  test("Testing Banner Title", () => {
    render(<Banner />);
    const element = screen.getByTestId("Banner Title");
    expect(element).toBeTruthy();
  });
  
  test("Testing Banner Description", () => {
    render(<Banner />);
    const element = screen.getByTestId("Banner Description");
    expect(element).toBeTruthy();
  });