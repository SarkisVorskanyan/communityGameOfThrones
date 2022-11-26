export const checkSuccess = (word: string, roles: [key: string] | undefined): boolean | null => {
    return roles ? roles.includes(word) : null
}