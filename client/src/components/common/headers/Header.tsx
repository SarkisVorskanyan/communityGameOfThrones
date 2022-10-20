import React, { FC } from 'react'
import BurgerBtn from '../buttons/burgerBtn/BurgerBtn'
import './Header.scss'
import { BiCaretDown } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import { createRipple } from './../../../helpers/styleEffects/RipplyEffect';
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {logOut, refresh} from "../../../store/features/authReducer/Auth_api";

interface HeaderProps{
    showSideBar: boolean
}

const Header: FC <HeaderProps> = ({showSideBar}) => {
    const {isAuth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logOut())
    }

    return (
        <div className='header_container'>
            <div className='leftSide_header'>
                {showSideBar && <BurgerBtn />}
                <NavLink to="/">Game of Thrones Community</NavLink>
            </div>
            <div className='rightSide_header'>
                <div className='auth_btn'>
                    <BiCaretDown size='2rem' />
                    {/*<div className='auth_list'>*/}
                        <ul className='auth_list'>
                            {!isAuth ? <li onClick={() => navigate('/signIn')}>
                                <a>Войти</a>
                            </li> : null}
                            {!isAuth ? <li onClick={() => navigate('/signUp')}>
                                <a >Регистрация</a>
                            </li> : null}
                            {isAuth ? <li onClick={logout}>
                                <a >Выход</a>
                                </li> : null}
                        </ul>
                    {/*</div>*/}
                </div>
            </div>
            
        </div>
    )
}

export default Header