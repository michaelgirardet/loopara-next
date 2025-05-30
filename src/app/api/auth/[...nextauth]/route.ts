import NextAuth, { type SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (user && credentials && (await bcrypt.compare(credentials.password, user.password))) {
          return { id: user.id.toString(), email: user.email, name: user.name };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" as SessionStrategy },
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
