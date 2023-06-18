import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./Search";
import RqProvider from "../utils/RqProvider";

jest.mock("@octokit/graphql");

describe("Search", () => {
  test("initially displays a skeleton", () => {
    render(
      <RqProvider>
        <Search accessToken="access-token" username="username" />
      </RqProvider>
    );

    const skeletonElement = screen.getByTestId("repository-list-skeleton");
    expect(skeletonElement).toBeInTheDocument();
  });

  test("fetches repositories and displays them", async () => {
    render(
      <RqProvider>
        <Search accessToken="access-token" username="username" />
      </RqProvider>
    );

    await waitFor(() => {
      const repositoryElement = screen.getByText("test-repo");
      expect(repositoryElement).toBeInTheDocument();
    });
  });

  test("displays a not found message when there are no results", async () => {
    render(
      <RqProvider>
        <Search accessToken="access-token" username="username" />
      </RqProvider>
    );

    await waitFor(() => {
      const inputElement = screen.getByPlaceholderText("Find a repository");
      fireEvent.change(inputElement, { target: { value: "empty" } });
      const notFoundMessage = screen.getByText("No repositories found.");
      expect(notFoundMessage).toBeInTheDocument();
    });
  });
});
