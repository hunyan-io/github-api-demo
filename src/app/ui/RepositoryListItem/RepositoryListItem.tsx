import { Repository } from "@/app/types/Repository";
import Card from "../Card/Card";
import CardFooter from "../Card/CardFooter";
import CardTitle from "../Card/CardTitle";
import CardText from "../Card/CardText";
import StarIcon from "../Icon/StarIcon";
import Badge from "../Badge/Badge";

interface RepositoryListItemProps {
  /**
   * The repository to display.
   */
  repository: Repository;
}

export default function RepositoryListItem({
  repository,
}: RepositoryListItemProps) {
  return (
    <a href={repository.url} className="cursor-pointer" target="_blank">
      <Card>
        <div className="flex justify-between flex-wrap items-center">
          <CardTitle as="h2">{repository.name}</CardTitle>
          <div className="flex items-center gap-2 mb-2">
            {repository.isPrivate && <Badge variant="indigo">Private</Badge>}
            {repository.isFork && <Badge variant="pink">Forked</Badge>}
            {repository.isArchived && <Badge variant="yellow">Archived</Badge>}
          </div>
        </div>
        <CardText
          dangerouslySetInnerHTML={{ __html: repository.descriptionHTML }}
        ></CardText>
        <CardFooter>
          {repository.language && repository.language.name && (
            <div className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: repository.language.color }}
              ></div>
              {repository.language.name}
            </div>
          )}
          {repository.stars > 0 && (
            <div className="flex items-center gap-1">
              <StarIcon />
              {repository.stars}
            </div>
          )}
          {repository.updatedAt &&
            `Last updated ${new Date(
              repository.updatedAt
            ).toLocaleDateString()}`}
        </CardFooter>
      </Card>
    </a>
  );
}
