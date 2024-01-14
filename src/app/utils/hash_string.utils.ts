import bcrypt from 'bcrypt'

export async function hashString (str: string): Promise<string> {
    const DEFAULT_SALT_ROUNDS = 10
    let saltRounds = DEFAULT_SALT_ROUNDS
    if (process.env.SALT_ROUNDS != null) {
        const parsedRounds = parseInt(process.env.SALT_ROUNDS, 10)
        if (!isNaN(parsedRounds)) {
            saltRounds = parsedRounds
        }
    }

    return await bcrypt.hash(str, saltRounds)
}

export async function compareHashedString (str: string, hashedString: string): Promise<boolean> {
    return await bcrypt.compare(str, hashedString)
}
