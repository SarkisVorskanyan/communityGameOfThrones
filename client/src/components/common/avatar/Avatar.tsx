import React, {FC} from 'react'
import Avatar from 'react-avatar';

interface AvatarProps {
    name: string | undefined,
    size: string
}

const UserAvatar: FC <AvatarProps> = ({name, size}) => {

    return (
        <Avatar name={name} size={'80'} round="50%" />
    )
}

export default UserAvatar