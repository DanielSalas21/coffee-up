import { PrismaClient } from "@/generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as { prisma: ReturnType<typeof createPrismaClient> };

if (!process.env.DATABASE_URL) throw new Error('Missing env variable: DATABASE_URL');

function createPrismaClient() {
    return new PrismaClient({
        accelerateUrl: process.env.DATABASE_URL!, //if-check above ensures this variable is defined
    }).$extends(withAccelerate());
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;