import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email: string;
      role: "USER" | "PREMIUM" | "ADMIN";
      image?: string | null;
      createdAt: string;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email: string;
    role: "USER" | "PREMIUM" | "ADMIN";
    image?: string | null;
    createdAt: string;
  }
}
