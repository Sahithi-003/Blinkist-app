import { render, screen } from '@testing-library/react';
import Avatars from "./Avatars"

it('renders Avatar', () => {
  render(<Avatars></Avatars>);
  const element = screen.getByTestId("Avatar");
  expect(element).toBeTruthy();
});