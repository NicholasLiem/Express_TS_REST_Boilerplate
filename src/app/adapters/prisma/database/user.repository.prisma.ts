import { PrismaClient, type User } from '@prisma/client'
import { type UserRepository } from '../../../interfaces/repositories/user.repository'
import { type UserCreateInput, type UserUpdateInput } from '../../../dto/users/user.dto'

const prisma = new PrismaClient()
export class UserRepositoryPrisma implements UserRepository {
    async create (user: UserCreateInput): Promise<void> {
        await prisma.user.create({ data: user })
    }

    async delete (id: number): Promise<void> {
        await prisma.user.delete({ where: { id } })
    }

    async findByEmail (email: string): Promise<User | null> {
        return await prisma.user.findFirst({ where: { email } })
    }

    async findById (id: number): Promise<User | null> {
        return await prisma.user.findUnique({ where: { id } })
    }

    async findByUsername (username: string): Promise<User | null> {
        return await prisma.user.findFirst({ where: { username } })
    }

    async update (user: UserUpdateInput): Promise<void> {
        await prisma.user.update({
            where: { id: user.id },
            data: user
        })
    }

    async findUserByIdentifier (identifier: string): Promise<User | null> {
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
