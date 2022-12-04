import { UserType } from '../usersTypes/UserType';

export interface SignInType {
    accessToken: string,
    refreshToken: string,
    user: UserType
}