import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import { getServerSession } from "next-auth";

jest.mock("@octokit/graphql");

jest.mock("next-auth", () => ({
  getServerSession: jest.fn(),
}));

jest.mock("../api/auth/[...nextauth]/route", () => ({
  authOptions: {},
}));

describe("Home", () => {
  beforeEach(() => {
    (getServerSession as any).mockClear();
  });

  it("renders Hero component with user data when session exists", async () => {
    const user = {
      name: "John Doe",
      image: "https://avatars.githubusercontent.com/u/40696130?v=4",
    };
    const session = {
      user,
      accessToken: "mockAccessToken",
    };
    (getServerSession as any).mockResolvedValue(session);

    const homeElements = await Home();

    render(homeElements);

    // Wait for the asynchronous operations to complete
    await screen.findByText(/John Doe/);

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByAltText(user.name)).toBeInTheDocument();
  });

  it("renders Steps component when session does not exist", async () => {
    (getServerSession as any).mockResolvedValue(null);

    const homeElements = await Home();

    render(homeElements);

    // Wait for the asynchronous operations to complete
    await screen.findByTestId("steps-component");

    expect(screen.getByTestId("steps-component")).toBeInTheDocument();
  });

  it("renders Search component with correct props when session exists", async () => {
    const user = {
      name: "John Doe",
      image: "https://avatars.githubusercontent.com/u/40696130?v=4",
    };
    const session = {
      user,
      accessToken: "mockAccessToken",
    };
    (getServerSession as any).mockResolvedValue(session);

    const homeElements = await Home();

    render(homeElements);

    // Wait for the asynchronous operations to complete
    await screen.findByTestId("search-component");

    expect(screen.getByTestId("search-component")).toBeInTheDocument();
  });
});
