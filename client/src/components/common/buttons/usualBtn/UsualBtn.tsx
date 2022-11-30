import React, {FC} from 'react'
import './UsualBtn.scss'

interface UsualBtnProps {
    onClick: (e: React.MouseEvent) => void,
    label: string
}

const UsualBtn: FC <UsualBtnProps> = ({onClick, label}) => {
    return (
        <button onClick={(e: React.MouseEvent) => onClick(e)} className="usualBtn" role="button">{label}</button>
    )
}

export default UsualBtn
