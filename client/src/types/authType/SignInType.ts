import { UserType } from './UserType';

export interface SignInType {
    accessToken: string,
    refreshToken: string,
    user: UserType
}