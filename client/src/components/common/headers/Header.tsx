import React, { FC } from 'react'
import BurgerBtn from '../buttons/burgerBtn/BurgerBtn'
import './Header.scss'

const Header: FC = () => {
    return (
        <div className='header_container'>
            <BurgerBtn />
        </div>
    )
}

export default Header