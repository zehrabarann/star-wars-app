import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

const snapShot = '<ul class="breadcrumb flex"><li class="pr-4"><a href="/">Home</a></li><li><a href="/starships">Starships</a></li></ul>'
jest.useFakeTimers("legacy");

describe("Starships", () => {
  test("Starhips breadcrumb", () => {
    render(
      <MemoryRouter initialEntries={["/starships?q=de"]}>
        <App />
      </MemoryRouter>
    );

    const breadcrumb = screen.getByTestId("breadcrumb-test");

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toContainHTML(snapShot);
  });

  test("Starhips loading", () => {
    const loadingSapShot = '<img alt="loader" class="h-[60px] mb-[50px]" src="loader.gif" /'
    render(
      <MemoryRouter initialEntries={["/starships?q=de"]}>
        <App />
      </MemoryRouter>
    );

    const loading = screen.getByTestId("loading-data");

    expect(loading).toBeInTheDocument();
    expect(loading).toContainHTML(loadingSapShot);
  });


  test("Search should be Decoded using the input field", () => {
    const route = "/starships";

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
