'use server'

import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

export async function rsvp(data: { name: string, confirmed: boolean }): Promise<{ success: boolean; message?: string }> {
    try {
        await prisma.rsvp.create({
            data
        })

        return { success: true }
    } catch (e) {
        if (e instanceof PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                return { success: true }
            }
        }

        return { success: false, message: 'not possible to confirm your assistance.' }
    }
}