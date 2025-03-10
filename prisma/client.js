//For creating a persistent single prisma client.

import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;

/* {
  datasources: {
    db: {
      url: process.env.DIRECT_URL,
    },
  },
} */
