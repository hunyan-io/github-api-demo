import Avatar from "../ui/Avatar/Avatar";
import Galaxy from "../ui/Galaxy/Galaxy";
import GithubButton from "./GithubButton";

interface HeroProps {
  user?: {
    image: string;
    name: string;
  } | null;
}

export default function Hero({ user }: HeroProps) {
  return (
    <Galaxy>
      <div className="flex flex-col items-center mt-32 text-center px-5">
        <h1 className="md:text-7xl text-5xl font-bold pb-4">GitHub API Demo</h1>
        <p className="md:text-2xl text-xl mb-7">
          Search for GitHub repositories using the GitHub API.
        </p>
        {!user && <GithubButton />}
        {user && (
          <Avatar
            className="mt-3"
            src={user.image}
            alt={user.name}
            label={`Logged in as ${user.name}`}
            size="sm"
            bordered
          />
        )}
      </div>
    </Galaxy>
  );
}
