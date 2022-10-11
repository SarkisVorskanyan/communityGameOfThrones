import React, { FC, ReactNode } from 'react'
import './Input.scss'

interface CustomInputProps {
    label?: string,
    error?: string | undefined,
    handleChange: (e: React.ChangeEvent<any>) => void,
    value?: string,
    name?: string,
    touched: boolean | undefined,
    type?: string,
    children: React.ReactNode
    [x: string]: any
}

const CustomInput: FC <CustomInputProps> = ({label,
                                                type = 'text',
                                                touched,
                                                error,
                                                name,
                                                handleChange,
                                                value, children, ...props}) => {
    return (
        <div className="customInput_container">      
            <input type={type}
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
            {/*<p>{error ? error : null}</p>*/}
            {children}
      </div>
        
    )
}

export default CustomInput

