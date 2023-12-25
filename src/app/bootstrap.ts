import { PrismaClient } from '@prisma/client'
import { RepositoryContainer } from './containers/repository.container'
import { ServiceContainer } from './containers/service.container'
import { UserRepositoryPrisma } from './adapters/prisma/database/user.repository.prisma'
import { RedisClient } from './adapters/redis/redis.client'

export async function initContainer (): Promise<ServiceContainer> {
    /**
     * Initialize Prisma Client
     */
    const prismaClient = new PrismaClient()
    prismaClient.$connect()

    /**
     * Initialize Redis Client
     */
    const redisClient = RedisClient.getInstance()
    await redisClient.connect()

    /**
     * Initialize SOAP Client
     */

    /**
     * Initialize Repositories
     */
    const userRepository = new UserRepositoryPrisma()
    const repositoryContainer = RepositoryContainer.getInstance(userRepository)

    /**
     * Initialize Services
     */
    return ServiceContainer.getInstance(repositoryContainer)
}
