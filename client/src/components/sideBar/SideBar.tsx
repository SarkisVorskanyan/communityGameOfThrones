import React, { FC } from 'react'
import { useAppSelector } from '../../store/StoreHooks'
import './SideBar.scss'

const SideBar: FC = () => {
    const {toggleSideBar} = useAppSelector(state => state.settings)
    return (
        <div className={toggleSideBar ? 'sideBar_container_active' : 'sideBar_container'}>
            <div className='sidebar_subContainer'>
                <h1>Меню</h1>
            </div>
        </div>
    )
}

export default SideBar