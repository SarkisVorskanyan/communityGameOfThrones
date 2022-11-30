import React, {FC} from "react";
import './DefaultInput.scss'

interface DefaultInputProps {
    label?: string,
    error?: string | undefined,
    handleChange: (e: React.ChangeEvent<any>) => void,
    value?: string,
    name?: string,
    touched?: boolean | undefined,
    type?: string,
    children: React.ReactNode
    [x: string]: any
}

const DefaultInput: FC <DefaultInputProps> = ({label,
                                                  type = 'text',
                                                  touched,
                                                  error,
                                                  name,
                                                  handleChange,
                                                  value, children, ...props}) => {
    return (
        <div className={'defaultInput_container'}>
            <input type={type}
                   value={value}
                   name={name}
                    //autoComplete={'off'}
                   onChange={(e) => handleChange(e)}
                   required
                   {...props}/>
            {children}
        </div>
    )
}

export default DefaultInput