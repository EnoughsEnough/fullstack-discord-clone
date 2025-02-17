import { PrismaClient } from '@prisma/client'

declare global {
   var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

// for Hot Mode Replacement in dev mode
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db
