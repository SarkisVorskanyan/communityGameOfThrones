import React, {FC} from 'react'
import Avatar from 'react-avatar';

interface AvatarProps {
    name: string | undefined,
    size: number
}

const UserAvatar: FC <AvatarProps> = ({name, size}) => {

    return (
        <Avatar name={name} size={size} round="50%" />
    )
}

export default UserAvatar