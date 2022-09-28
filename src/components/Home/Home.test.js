import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Bootstrap from "../Bootstrap";

describe("Home Page Test", () => {
  test("Explore starships button", async () => {
    const route = "/";

    render(
      <MemoryRouter initialEntries={[route]}>
        <Bootstrap />
      </MemoryRouter>
    );

    const exploreStarshipBtn = screen.getByText("Explore Starships");
    userEvent.click(exploreStarshipBtn);

    waitForElementToBeRemoved(exploreStarshipBtn).then().catch(console.log);

    await waitFor(() => {
      const view = screen.getByText(/3000000/i);
      const cargoCapaticy = within(view).getByText(/cargo capaticy:/i);
      expect(cargoCapaticy).toBeInTheDocument();
    });
  });
});
