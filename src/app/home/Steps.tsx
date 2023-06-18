import Card from "../ui/Card/Card";
import CardText from "../ui/Card/CardText";
import CardTitle from "../ui/Card/CardTitle";

export default function Steps() {
  return (
    <div
      className="max-w-4xl mx-auto px-4 pb-8 flex flex-col items-center"
      data-testid="steps-component"
    >
      <h2 className="text-white font-bold text-3xl mb-10">How it works</h2>
      <ol className="flex gap-5 flex-wrap">
        <li className="grow basis-64">
          <Card>
            <CardTitle as="h3">1. Login</CardTitle>
            <CardText>Login with your GitHub account to get started.</CardText>
          </Card>
        </li>
        <li className="grow basis-64">
          <Card>
            <CardTitle as="h3">2. Search</CardTitle>
            <CardText>Type in the name of a repository to search for.</CardText>
          </Card>
        </li>
        <li className="grow basis-64">
          <Card>
            <CardTitle as="h3">3. Browse</CardTitle>
            <CardText>Browse a paginated list of repositories.</CardText>
          </Card>
        </li>
      </ol>
    </div>
  );
}
