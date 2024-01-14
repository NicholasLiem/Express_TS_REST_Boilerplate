import { createClient, type RedisClientType } from 'redis'

export class RedisClient {
    private static instance: RedisClient
    private client: RedisClientType | null = null

    private constructor () {
    }

    public static getInstance (): RedisClient {
        if (RedisClient.instance == null) {
            RedisClient.instance = new RedisClient()
        }
        return RedisClient.instance
    }

    public async connect (): Promise<void> {
        if (this.client == null) {
            this.client = createClient({
                url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
                password: process.env.REDIS_PASSWORD
            })

            this.client.on('error', (err) => {
                console.log('Redis Client Error', err)
            })

            await this.client.connect()
            console.log('Redis connected')
        }
    }

    public disconnect (): void {
        if (this.client !== null) {
            void this.client.disconnect()
            this.client = null
        }
    }

    public async set (key: string, value: string, expireInSeconds?: number): Promise<void> {
        if (this.client !== null) {
            if (expireInSeconds !== null) {
                await this.client.set(key, value, {
                    EX: expireInSeconds,
                    NX: true
                })
            } else {
                await this.client.set(key, value)
            }
        }
    }

    public async get (key: string): Promise<string | null> {
        return (this.client != null) ? await this.client.get(key) : null
    }

    public async del (key: string): Promise<void> {
        if (this.client != null) {
            await this.client.del(key)
        }
    }
}
