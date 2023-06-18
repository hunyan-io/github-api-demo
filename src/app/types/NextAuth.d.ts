import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    login: string;
    accessToken: string;
  }
}
