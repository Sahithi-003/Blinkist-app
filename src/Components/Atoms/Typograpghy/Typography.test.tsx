import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import TypographyComponent from "./Typography";


afterEach(cleanup);

it("renders Typography header", () => {
  render(<TypographyComponent children="caption" variant="header"/>, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("caption");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-h4");
});

it("renders Typography subtitle", () => {
  render(<TypographyComponent children="subtitle" variant="subtitle" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("subtitle");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-subtitle2");
});

it("renders Typography h3", () => {
  render(<TypographyComponent children="Header" variant="h3" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("Header");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-h3");
});

it("renders Typography h2", () => {
  render(<TypographyComponent children="Header" variant="h2" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("Header");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-h2");
});

it("renders Typography default", () => {
  render(<TypographyComponent children="Header" variant="h5" />, {
    wrapper: MemoryRouter,
  });
  const button = screen.getByText("Header");

  expect(button).toBeTruthy();
  expect(button).toHaveClass("MuiTypography-h5");
});