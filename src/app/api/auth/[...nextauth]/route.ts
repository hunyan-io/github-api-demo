import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  throw new Error(
    "Please define the GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables"
  );
}

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.accessToken = account.access_token!;
        token.login = (profile as any).login;
        token.id = (profile as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user ??= {};
      session.user.image = `https://avatars.githubusercontent.com/u/${token.id}?v=4`;
      session.user.name = token.login;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
