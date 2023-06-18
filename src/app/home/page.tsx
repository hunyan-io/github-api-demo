import { getServerSession } from "next-auth";
import Hero from "./Hero";
import Search from "./Search";
import Steps from "./Steps";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RqProvider from "../utils/RqProvider";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Hero
        user={
          session &&
          session.user && {
            name: session.user.name as string,
            image: session.user.image as string,
          }
        }
      />
      {!session && <Steps />}
      {session && session.user?.name && (
        <RqProvider>
          <Search
            username={session.user.name}
            accessToken={session.accessToken}
          />
        </RqProvider>
      )}
    </main>
  );
}
