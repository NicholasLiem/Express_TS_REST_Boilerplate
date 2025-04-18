import { type UserRepository } from '../interfaces/repositories/user.repository'

export class RepositoryContainer {
    private static instance: RepositoryContainer
    private readonly userRepository: UserRepository

    private constructor (userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public static getInstance (userRepository: UserRepository): RepositoryContainer {
        if (RepositoryContainer.instance == null) {
            RepositoryContainer.instance = new RepositoryContainer(userRepository)
        }
        return RepositoryContainer.instance
    }

    public getUserRepository (): UserRepository {
        return this.userRepository
    }
}
