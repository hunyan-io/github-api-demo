import Card from "../Card/Card";

interface RepositoryListSkeletonProps {
  /**
   * The number of skeletons to display.
   */
  count: number;
}

export default function RepositoryListSkeleton({
  count,
}: RepositoryListSkeletonProps) {
  return (
    <div className="flex flex-col gap-4" data-testid="repository-list-skeleton">
      {new Array(count).fill(null).map((_, index) => (
        <Card key={index}>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-6"></div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-7"></div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
            <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-4"></div>
            <div className="w-44 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
        </Card>
      ))}
    </div>
  );
}
