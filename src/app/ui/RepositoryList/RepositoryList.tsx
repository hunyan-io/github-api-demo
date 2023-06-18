import { Repository } from "@/app/types/Repository";
import EmptyState from "./EmptyState";
import RepositoryListItem from "../RepositoryListItem/RepositoryListItem";

interface RepositoryListProps {
  /**
   * The repositories to display.
   */
  list?: Repository[];
}

export default function RepositoryList({ list }: RepositoryListProps) {
  if (!list || list.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="flex flex-col gap-4">
      {list.map((repository) => (
        <RepositoryListItem key={repository.id} repository={repository} />
      ))}
    </div>
  );
}
