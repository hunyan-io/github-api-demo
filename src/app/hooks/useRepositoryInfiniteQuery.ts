import { graphql } from "@octokit/graphql";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Repository } from "../types/Repository";
import {
  SearchResultItemConnection,
  Repository as APIRepository,
} from "@octokit/graphql-schema";

interface FetchRepositoriesParams {
  searchTerm: string;
  limit: number;
  username: string;
  accessToken: string;
  afterId?: string;
}

async function fetchRepositories({
  searchTerm,
  afterId,
  limit,
  username,
  accessToken,
}: FetchRepositoriesParams) {
  const { search } = await graphql<{ search?: SearchResultItemConnection }>(
    `
      query searchRepositories(
        $searchTerm: String!
        $limit: Int!
        $afterId: String
      ) {
        search(
          query: $searchTerm
          type: REPOSITORY
          first: $limit
          after: $afterId
        ) {
          nodes {
            ... on Repository {
              id
              descriptionHTML
              name
              primaryLanguage {
                color
                name
              }
              isArchived
              isFork
              isPrivate
              stargazerCount
              updatedAt
              url
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `,
    {
      searchTerm: `user:${username} ${searchTerm}`,
      afterId,
      limit,
      headers: {
        authorization: `token ${accessToken}`,
      },
    }
  );

  return {
    items:
      search?.nodes?.filter(Boolean).map((node) => {
        const repository = node as APIRepository;
        return {
          id: repository.id,
          descriptionHTML: repository.descriptionHTML,
          name: repository.name,
          language: {
            color: repository.primaryLanguage?.color,
            name: repository.primaryLanguage?.name,
          },
          isArchived: repository.isArchived,
          isFork: repository.isFork,
          isPrivate: repository.isPrivate,
          stars: repository.stargazerCount,
          updatedAt: new Date(repository.updatedAt),
          url: repository.url,
        } as Repository;
      }) || [],
    endCursor: search?.pageInfo?.endCursor,
    hasNextPage: search?.pageInfo?.hasNextPage,
  };
}

export default function useRepositoryInfiniteQuery(
  searchTerm: string,
  username: string,
  accessToken: string,
  limit = 6
) {
  return useInfiniteQuery({
    queryKey: ["repositories", searchTerm],
    queryFn: ({ pageParam }) =>
      fetchRepositories({
        searchTerm,
        afterId: pageParam,
        limit,
        username,
        accessToken,
      }),
    getNextPageParam: (lastPage, allPages) =>
      (lastPage?.hasNextPage && lastPage.endCursor) || undefined,
    enabled: !!accessToken,
  });
}
