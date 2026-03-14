'use server'

import { PrismaClientKnownRequestError } from "@/generated/prisma/internal/prismaNamespace"
import { prisma } from "@/lib/prisma"

export async function getOrCreateUser(name: string): Promise<{ success: boolean, name: string }> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                name
            }
        });

        // If the user exists already, just return a successful response to indicate things are ok
        if (user) return { success: true, name: user.name }

        // If the user does not exist, then create it.
        const newUser = await prisma.user.create({
            data: { name }
        })

        return { success: true, name: newUser.name }
    } catch (e) {
        // Error handling. Check for uniqueness constraints
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === 'P2002') throw new Error('Alguien ya usó este nombre, elige otro.');
        }
        throw e
    }
}