import React, { FC } from 'react'
import './Titles.scss'

interface FormTitleProps{
    title: string
}

const FormTitle: FC <FormTitleProps> = ({title}) => {
    return (   
        <h1 className='formTitle'>{title}</h1>
    )
}

export default FormTitle