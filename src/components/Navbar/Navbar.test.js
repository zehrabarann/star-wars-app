import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("Navbar Test", () => {
  const route = "/";

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

  test("Should logo go homepage", () => {
    screen.getByRole("img", {
      name: /logo/i,
    });
  });

  test("Links should go to the corresponding page", () => {
    const route = "/";
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
    screen.getByRole("link", {
      name: /home/i,
    });

    screen.getByRole("link", {
      name: /starships/i,
    });
  });
});
