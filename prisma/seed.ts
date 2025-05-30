import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    password: "alicepassword",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
          published: false,
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    password: "bobpassword",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    // Hashage du mot de passe pour chaque utilisateur
    const hashedPassword = await bcrypt.hash(u.password, 12);

    await prisma.user.create({
      data: {
        name: u.name,
        email: u.email,
        password: hashedPassword,
        posts: u.posts,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
