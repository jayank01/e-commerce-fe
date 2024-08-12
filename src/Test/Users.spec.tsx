import { render, screen } from "@testing-library/react";
import DummyUserForTest from "../components/User/DummyUserForTest";


describe("User", () => {
  test("renders heading", async () => {
    render(<DummyUserForTest />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<DummyUserForTest />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});