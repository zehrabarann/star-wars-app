import { fireEvent, render, screen } from "@testing-library/react";
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

  test("Search should be Decoded using the input field", async () => {
    const route = "/";

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const input = screen.getByTestId("search-input");
    expect(input).toHaveValue(""); //Firstly imput empty
    fireEvent.change(input, { target: { value: "cr" } });
    fireEvent.keyPress(input, { key: "Enter", code: 13 });
    const starshipsName = screen.getByTestId("card-name");
    expect(starshipsName).toBeInTheDocument();
    expect(true).toBeTruthy();
  });
});
