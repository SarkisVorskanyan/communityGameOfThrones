import React, { FC } from 'react'
import BurgerBtn from '../buttons/burgerBtn/BurgerBtn'
import './Header.scss'
import { BiCaretDown } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { createRipple } from './../../../helpers/styleEffects/RipplyEffect';

interface HeaderProps{
    showSideBar: boolean
}

const Header: FC <HeaderProps> = ({showSideBar}) => {
    return (
        <div className='header_container'>
            <div className='leftSide_header'>
                {showSideBar && <BurgerBtn />}
                <NavLink to="/">Game of Thrones Community</NavLink>
            </div>
            <div className='rightSide_header'>
                <div className='auth_btn'>
                    <BiCaretDown size='3rem' />
                    <div className='auth_list'>
                        <ul>
                            <li>
                                <NavLink to="/signIn">Войти</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signUp">Регистрация</NavLink>
                            </li>
                            <li>Выход</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header