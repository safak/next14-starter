import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create multiple users
  await prisma.user.createMany({
    data: Array.from({ length: 3 }).map(() => ({
      email: faker.internet.email().toLowerCase(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    })),
    skipDuplicates: true,
  });

  // Get all created users
  const allUsers = await prisma.user.findMany();

  // Create random posts for each user
  for (const user of allUsers) {
    const wordCount = Math.floor(Math.random() * (8 - 6 + 1)) + 6;
    const paragraphCount = Math.floor(Math.random() * (8 - 6 + 1)) + 3;
    await prisma.post.createMany({
      data: Array.from({ length: 3 }).map(() => ({
        title: faker.lorem.sentence(wordCount),
        image: faker.image.urlPicsumPhotos({
          width: 800,
          height: 600,
        }),
        content: faker.lorem.paragraphs(paragraphCount),
        authorId: user.id,
      })),
    });
  }

  console.log("Database seeded successfully! 🌱");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
