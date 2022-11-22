import React, { FC, ReactNode } from 'react'
import './SubmitBtn.scss'

interface SubmitBtnProps {
    label: string,
    handleSubmit: () => void,
}

const SubmitBtn: FC <SubmitBtnProps> = ({label, handleSubmit }) => {
    return (
        <div className="container">
            <div className="button-container">
                <span className="mask">{label}</span>
                <button
                    onClick={() => handleSubmit()}
                    onKeyPress={(e: React.KeyboardEvent<HTMLElement>) => console.log(e.keyCode)}
                    type="submit"
                    name="Hover">{label}</button>
            </div>
        </div>
        
    )
}

export default SubmitBtn
