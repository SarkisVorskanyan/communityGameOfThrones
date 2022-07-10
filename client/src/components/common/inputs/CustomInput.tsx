import React, { FC, ReactNode } from 'react'
import './Input.scss'

interface CustomInputProps {
    label?: string,
    error?: string | undefined,
    handleChange: (e: React.ChangeEvent<any>) => void,
    value?: string,
    name?: string,
    [x: string]: any
}

const CustomInput: FC <CustomInputProps> = ({label, error, name, handleChange, value, ...props}) => {
    return (
        <div className="customInput_container">      
            <input type="text"
                    value={value}
                    name={name}
                    autoComplete={'off'}
                    onChange={(e) => handleChange(e)}  
                    required 
                    {...props}
                    />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>{label}</label>
            <p>{error}</p>
      </div>
        
    )
}

export default CustomInput

