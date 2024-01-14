import jwt, { type JwtPayload } from 'jsonwebtoken'
import fs from 'fs'

export interface JwtClaims {
    userId: number
    username: string
    name: string
    isAdmin: boolean
}

interface VerifiedJwtResult {
    payload: JwtPayload | string | null
    expired: boolean
}

declare module 'express-serve-static-core' {
    interface Request {
        userId?: number
        username?: string
        name?: string
        isAdmin?: boolean
    }
}

export function signJWT (payload: JwtClaims, expiresIn: string | number): string {
    const privateKey = fs.readFileSync('private.key')
    const algorithmType = 'RS256'
    return jwt.sign(
        payload,
        privateKey,
        {
            algorithm: algorithmType,
            expiresIn
        })
}

export function verifyJWT (token: string): VerifiedJwtResult {
    try {
        const publicKey = fs.readFileSync('public.key')
        const algorithmType = 'RS256'
        const decoded = jwt.verify(token, publicKey, {
            algorithms: [algorithmType]
        })
        return {
            payload: decoded,
            expired: false
        }
    } catch (e) {
        return {
            payload: null,
            expired: true
        }
    }
}
