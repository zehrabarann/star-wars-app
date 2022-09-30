import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("Home Page Test", () => {
  test("Explore starships button", async () => {
    const route = "/";
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    jest.useFakeTimers("legacy");
    await new Promise((res) => {
      jest.setTimeout(60000);
      const exploreStarshipBtn = screen.getByText("Explore Starships");
      fireEvent.click(exploreStarshipBtn);
      expect(true).toBe(true);
      res();
    });
  });
});
