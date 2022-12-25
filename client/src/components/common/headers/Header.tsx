import React, { FC } from 'react'
import BurgerBtn from '../buttons/burgerBtn/BurgerBtn'
import './Header.scss'
import { BiCaretDown } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {logOut, refresh} from "../../../store/features/authReducer/Auth_api";
import UserAvatar from "../avatar/Avatar";

interface HeaderProps{
    showSideBar: boolean
}

const Header: FC <HeaderProps> = ({showSideBar}) => {
    const {isAuth, userInfo} = useAppSelector(state => state.auth)
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
                {isAuth ? <div className={'avatar'}>
                    <UserAvatar name={userInfo?.nickname} size={'70'}/>
                </div> : null}
                <div className='auth_btn'>
                    <BiCaretDown strokeWidth="1" stroke={'white'} size='2rem' />
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