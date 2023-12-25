import { PrismaClient, type User } from '@prisma/client'
import { type UserRepository } from '../../../interfaces/repositories/user.repository'

const prisma = new PrismaClient()
export class UserRepositoryPrisma implements UserRepository {
    async create (user: User) {
        await prisma.user.create({ data: user })
    }

    async delete (id: number) {
        await prisma.user.delete({ where: { id } })
    }

    async findByEmail (email: string) {
        return await prisma.user.findFirst({ where: { email } })
    }

    async findById (id: number) {
        return await prisma.user.findUnique({ where: { id } })
    }

    async findByUsername (username: string) {
        return await prisma.user.findFirst({ where: { username } })
    }

    async update (user: User) {
        await prisma.user.update({
            where: { id: user.id },
            data: user
        })
    }

    async findUserByIdentifier (identifier: string) {
        return await prisma.user.findFirst({
            where: {
                OR: [
                    { username: identifier },
                    { email: identifier }
                ]
            }
        })
    }
}
