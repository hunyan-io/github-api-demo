import { renderHook, waitFor } from "@testing-library/react";
import useRepositoryInfiniteQuery from "./useRepositoryInfiniteQuery";
import RqProvider from "../utils/RqProvider";

jest.mock("@octokit/graphql");

describe("useRepositoryInfiniteQuery", () => {
  const searchTerm = "test";
  const username = "example";
  const accessToken = "token";
  const limit = 8;

  it("fetches repositories and returns the result", async () => {
    const expectedRepository = {
      id: "1",
      descriptionHTML: "<p>Test repository</p>",
      name: "test-repo",
      language: {
        color: "#ff0000",
        name: "JavaScript",
      },
      isArchived: false,
      isFork: false,
      isPrivate: false,
      stars: 10,
      updatedAt: new Date("2022-01-01T00:00:00Z"),
      url: "https://github.com/example/test-repo",
    };

    const { result } = renderHook(
      () =>
        useRepositoryInfiniteQuery(searchTerm, username, accessToken, limit),
      { wrapper: RqProvider }
    );

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
      expect(result.current.data?.pages[0].items).toEqual([expectedRepository]);
      expect(result.current.data?.pages[0].endCursor).toBe("cursor");
      expect(result.current.data?.pages[0].hasNextPage).toBe(true);
    });
  });
});
