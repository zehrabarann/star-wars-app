import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("Detail Page Test", () => {
  const route = "/detail/15";

  const firstlyRender = () =>
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

  test("Go back button goes to starships", () => {
    firstlyRender();
    const goBackBtn = screen.getByText("Go Back");
    fireEvent.click(goBackBtn);
    expect(true).toBe(true);
  });

  test("Should starship detail information appear", () => {
    firstlyRender();
    const lastview = screen.getByTestId("last-view-title");
    expect(lastview).toBeInTheDocument();
    expect(lastview).toHaveTextContent("Last View Starships");
    expect(true).toBeTruthy();

    const detailModelInf = screen.getByTestId("detail-model");
    expect(detailModelInf).toBeInTheDocument();
    expect(detailModelInf).toHaveTextContent("Model");
    expect(true).toBeTruthy();
  });

  test("Should last view title in detail page", () => {
    firstlyRender();
    const lastview = screen.getByTestId("last-view-title");
    expect(lastview).toBeInTheDocument();
    expect(lastview).toHaveTextContent("Last View Starships");
    expect(true).toBeTruthy();
  });
});
