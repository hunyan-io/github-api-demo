"use client";

import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import SearchIcon from "../ui/Icon/SearchIcon";
import Input from "../ui/Input/Input";
import RepositoryList from "../ui/RepositoryList/RepositoryList";
import useRepositoryInfiniteQuery from "../hooks/useRepositoryInfiniteQuery";
import RepositoryListSkeleton from "../ui/RepositoryListSkeleton/RepositoryListSkeleton";
import Button from "../ui/Button/Button";
import ArrowDownIcon from "../ui/Icon/ArrowDownIcon";

interface SearchProps {
  username: string;
  accessToken: string;
}

export default function Search({ accessToken, username }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 400);
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isFetching,
    isFetchingNextPage,
  } = useRepositoryInfiniteQuery(debouncedSearchValue, username, accessToken);

  return (
    <div
      className="max-w-3xl mx-auto px-4 pb-8 flex flex-col gap-6"
      data-testid="search-component"
    >
      <Input
        icon={<SearchIcon />}
        placeholder="Find a repository"
        type="text"
        className="mb-4"
        value={searchValue}
        onChange={setSearchValue}
      />
      {data && (
        <RepositoryList list={data.pages.flatMap((page) => page.items)} />
      )}
      {isFetching && <RepositoryListSkeleton count={6} />}
      {isError && (
        <div className="text-center text-red-600">Unexpected error</div>
      )}
      {hasNextPage && (
        <div className="text-center">
          <Button
            colorVariant="indigo"
            sizeVariant="sm"
            icon={<ArrowDownIcon />}
            onClick={fetchNextPage}
            disabled={isFetchingNextPage}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
