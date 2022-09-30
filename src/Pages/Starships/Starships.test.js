import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

const snapShot = '<ul class="breadcrumb flex"><li class="pr-4"><a href="/">Home</a></li><li><a href="/starships">Starships</a></li></ul>'
jest.useFakeTimers("legacy");

describe("Starships", () => {
  test("Starhips breadcrumb", async () => {
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

  test("Starhips loading", async () => {
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

});
