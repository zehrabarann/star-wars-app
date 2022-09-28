import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Bootstrap from "../Bootstrap";

describe("Error Page Test", () => {
  test("should status equal 404 when endpoint is undefined", () => {
    const route = "/asdasdasdasd";

    render(
      <MemoryRouter initialEntries={[route]}>
        <Bootstrap />
      </MemoryRouter>
    );
    const oopsText = screen.getByRole("heading", {
      level: 3,
      name: "Oopps !",
    });
    expect(oopsText).toBeInTheDocument();
  });
});
