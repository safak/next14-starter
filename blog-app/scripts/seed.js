const { db } = require("@vercel/postgres");
const { posts } = require("../src/app/lib/placeholder-data.js");

async function seedPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS posts (
        id UUID DEFAULT uuid_generate_v1mc() PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL UNIQUE,
        content TEXT NOT NULL,
        date TEXT NOT NULL
      );
    `;

    console.log(`Created "posts" table`);

    // Insert data into the "users" table
    const insertedPosts = await Promise.all(
      posts.map(async (post) => {
        return client.sql`
        INSERT INTO posts (id, title, content, date, author)
        VALUES (${post.id}, ${post.title}, ${post.content}, ${post.date}, ${post.user})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );
    console.log(`Seeded ${insertedPosts.length} posts articles`);

    return {
      createTable,
      posts: insertedPosts,
    };
  } catch (error) {
    console.error("Error seeding posts:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedPosts(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
