import { type UserRepository } from '../../interfaces/repositories/user.repository'
import { compareHashedString, hashString } from '../../utils/hash_string.utils'
import { type JwtClaims, signJWT } from '../../utils/jwt.utils'
import { type UserCreateInput } from '../../dto/users/user.dto'

/**
 * What to do in Services:
 * 1. Implement Business Logic
 * 2. Handle Database Operations
 * 3. Enforce Business Rules
 * 4. Don't Access HTTP Request/Response
 * 5. Validate / Sanitize Input using Zod
 */
export class UserService implements UserService {
    private readonly userRepository: UserRepository

    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async authenticate (identifier: string, password: string): Promise<string | null> {
        const user = await this.userRepository.findUserByIdentifier(identifier)

        if (user == null) {
            return null
        }
        const success = await compareHashedString(password, user.hashedPassword)
        if (!success) {
            return null
        }

        const jwtClaims: JwtClaims = {
            userId: user.id,
            username: user.username,
            name: user.name,
            isAdmin: user.isAdmin
        }

        return signJWT(jwtClaims, '3h')
    }

    async register (username: string, name: string, email: string, password: string): Promise<boolean | null> {
        const hashedPassword = await hashString(password)
        if (hashedPassword.length > 0) {
            const newUser: UserCreateInput = {
                username,
                name,
                email,
                isAdmin: false,
                hashedPassword
            }
            await this.userRepository.create(newUser)
            return true
        } else {
            return false
        }
    }
}
