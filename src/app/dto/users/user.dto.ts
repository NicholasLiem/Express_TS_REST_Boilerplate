export interface UserCreateInput {
    username: string
    name: string
    email: string
    isAdmin: boolean
    hashedPassword: string
}

export interface UserUpdateInput {
    id: number
    username: string
    name: string
    email: string
    isAdmin: boolean
    hashedPassword: string
}
