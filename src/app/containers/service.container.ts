import { UserService } from '../application/services/user.service'
import { type RepositoryContainer } from './repository.container'

export class ServiceContainer {
    private static instance: ServiceContainer
    private readonly userService: UserService

    private constructor (repositoryContainer: RepositoryContainer) {
        this.userService = new UserService(repositoryContainer.getUserRepository())
    }

    public static getInstance (repositoryContainer: RepositoryContainer): ServiceContainer {
        if (ServiceContainer.instance == null) {
            ServiceContainer.instance = new ServiceContainer(repositoryContainer)
        }
        return ServiceContainer.instance
    }

    public getUserService (): UserService {
        return this.userService
    }
}
