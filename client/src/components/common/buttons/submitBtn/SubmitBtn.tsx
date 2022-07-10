import React, { FC, ReactNode } from 'react'
import './SubmitBtn.scss'

interface SubmitBtnProps {
    
}

const SubmitBtn: FC = () => {
    return (
        <div className="container">
            <div className="button-container">
                <span className="mask">HOVER</span>
                <button type="button" name="Hover">HOVER</button>
            </div>
        </div>
        
    )
}

export default SubmitBtn
