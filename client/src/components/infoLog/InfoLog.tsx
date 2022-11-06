import React, { FC } from 'react'
import './InfoLog.scss'

interface InfoLogProps {
    text: string,
    setShowInfoLog: () => void
}

const InfoLog: FC <InfoLogProps> = ({text, setShowInfoLog}) => {
    return (
        <div className={'container'}>
            <div className={'infoText'}>
                <p>{text}</p>
            </div>
            <div onClick={setShowInfoLog} className={'close'}>
                <span>X</span>
            </div>
        </div>
    )
}

export default InfoLog