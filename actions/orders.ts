'use server'

import { prisma } from "@/lib/prisma"

// Function to get orders submitted by a user.
// If the user hasn't submitted any, it returns an empty array. Indicating there is no order in progress
export async function getOrder(name: string) {
    return await prisma.order.findMany({
        where: {
            user: {
                name
            }
        }
    })
}

export async function createOrder(data: {
    name: string;
    selectedDrink: string;
    customizations: string[];
    temperature: string | null;
    milkChoice: string | null;
}) {
    const { name, ...rest } = data

    const { id } = await prisma.user.findUniqueOrThrow({
        where: {
            name
        }
    })

    return await prisma.order.create({
        data: {
            userId: id,
            ...rest
        }
    })
}