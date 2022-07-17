import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Avatar from "./Avatars";

it("renders Avatar", () => {
    render(<Avatar/>)
    const avatar = screen.getByText("Avatar")
  
    expect(avatar).toBeTruthy();
    // expect(button).toHaveClass("MuiTypography-h5");
  });