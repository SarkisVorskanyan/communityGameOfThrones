import { UserType } from './UserType';

export interface SignUpType{
    accessToken: string,
    refreshToken: string,
    user: UserType
}