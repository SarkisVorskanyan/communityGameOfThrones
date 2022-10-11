import React, { FC } from 'react'
import BurgerBtn from '../buttons/burgerBtn/BurgerBtn'
import './Header.scss'
import { BiCaretDown } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { createRipple } from './../../../helpers/styleEffects/RipplyEffect';
import {useAppSelector} from "../../../store/StoreHooks";

interface HeaderProps{
    showSideBar: boolean
}

const Header: FC <HeaderProps> = ({showSideBar}) => {
    const {auth} = useAppSelector(state => state.auth)
    return (
        <div className='header_container'>
            <div className='leftSide_header'>
                {showSideBar && <BurgerBtn />}
                <NavLink to="/">Game of Thrones Community</NavLink>
            </div>
            <div className='rightSide_header'>
                <div className='auth_btn'>
                    <BiCaretDown size='2rem' />
                    <div className='auth_list'>
                        <ul>
                            <li>
                                <NavLink to="/signIn">Войти</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signUp">Регистрация</NavLink>
                            </li>
                            {auth ? <li>Выход</li> : null}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header