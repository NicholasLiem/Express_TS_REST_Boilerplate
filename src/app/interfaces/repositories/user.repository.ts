import { type User } from '@prisma/client'
import { type UserUpdateInput, type UserCreateInput } from '../../dto/users/user.dto'

export interface UserRepository {
    findById: (id: number) => Promise<User | null>
    findByUsername: (username: string) => Promise<User | null>
    findByEmail: (email: string) => Promise<User | null>
    findUserByIdentifier: (identifier: string) => Promise<User | null>
    create: (user: UserCreateInput) => Promise<void>
    update: (user: UserUpdateInput) => Promise<void>
    delete: (id: number) => Promise<void>
}
