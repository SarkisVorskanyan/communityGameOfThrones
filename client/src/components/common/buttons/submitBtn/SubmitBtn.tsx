import React, { FC, ReactNode } from 'react'
import './SubmitBtn.scss'
import {log} from "util";

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
                    onKeyPress={(e: React.KeyboardEvent<HTMLElement>) => console.log(e.key)}
                    type="submit"
                    name="Hover">{label}</button>
            </div>
        </div>
        
    )
}

export default SubmitBtn
