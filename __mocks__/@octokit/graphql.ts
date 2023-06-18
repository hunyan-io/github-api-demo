export const graphql = async (
  query: string,
  variables: Record<string, any>
) => {
  const searchTerm = (variables?.searchTerm || "") as string;
  if (searchTerm.includes("empty")) {
    return {
      search: {
        nodes: [],
        pageInfo: {
          endCursor: "Y3Vyc29yOnYyOpHOA3h5ZQ==",
          hasNextPage: false,
        },
      },
    };
  }
  return {
    search: {
      nodes: [
        {
          id: "1",
          descriptionHTML: "<p>Test repository</p>",
          name: "test-repo",
          primaryLanguage: {
            color: "#ff0000",
            name: "JavaScript",
          },
          isArchived: false,
          isFork: false,
          isPrivate: false,
          stargazerCount: 10,
          updatedAt: "2022-01-01T00:00:00Z",
          url: "https://github.com/example/test-repo",
        },
      ],
      pageInfo: {
        endCursor: "cursor",
        hasNextPage: true,
      },
    },
  };
};
