import React, {FC, useEffect, useState} from 'react'
import { useAppSelector } from '../../store/StoreHooks'
import './SideBar.scss'
import { RiAdminLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { SideBarData } from '../../utils/data/SidebarData/SideBarData';
import { NavLink } from 'react-router-dom';
import { SideBarDataType } from './../../types/data/SideBarDataTypes/SideBarDataType';
import { useAppDispatch } from './../../store/StoreHooks';
import { setSubMenuId } from '../../store/features/settingsReducer/Settings_reducer';
import { checkSuccess } from '../../helpers/customHelpers/CustomHelpers';

const SideBar: FC = () => {
    const {toggleSideBar} = useAppSelector(state => state.settings)
    const {userInfo} = useAppSelector(state => state.auth)
    //const [subMenuId, setSubMenuId] = useState<number | null>(null)
    const {subMenuId} = useAppSelector(state => state.settings)
    const dispatch = useAppDispatch()

    const openOrCloseSubMenu = (item: SideBarDataType, index: number, e: React.MouseEvent) => {
        e.stopPropagation()
        if(item?.subMenu){
            if(index === subMenuId){
                dispatch(setSubMenuId(null))
            }else{
                dispatch(setSubMenuId(index))
            }
        }else{
            dispatch(setSubMenuId(null))
        }
        
    }

    useEffect(() => {
        dispatch(setSubMenuId(null))
    }, [toggleSideBar])


    return (
        <div className={toggleSideBar ? 'sideBar_container_active' : 'sideBar_container'}>
            <div className='sidebar_subContainer'>
                <ul className={'nav-links'}>
                    {SideBarData.map((item, index) => (
                        checkSuccess(item?.for, userInfo?.role) ? (
                            <li style={{overflow: index === subMenuId ? 'visible' : 'hidden'}} key={index}>
                                <div className={'link_item'}
                                     onClick={(e:  React.MouseEvent) => openOrCloseSubMenu(item, index, e)}
                                     style={{justifyContent: toggleSideBar ? 'space-between' : 'flex-end'}}>
                                    <span>
                                        <span className={toggleSideBar ? 'sideBar_icon' : 'sideBar_icon_inActive'}>
                                            {item.icon}
                                        </span>
                                        {/*<RiAdminLine className={toggleSideBar ? 'sideBar_icon' : 'sideBar_icon_inActive'}/>*/}
                                        {toggleSideBar ? <NavLink to={item?.url}>{item.name}</NavLink> : null}
                                    </span>
                                    {item?.subMenu && toggleSideBar ? <IoIosArrowDown
                                        className={index === subMenuId ? 'arrow_up' : 'arrow_down'} /> : null}
                                </div>

                                {item?.subMenu ? (
                                    <ul className={index === subMenuId ? toggleSideBar ? 'sub_menu_active' : 'sub_menu_close' : 'sub_menu'}>
                                        {item?.subMenu.map((itemSubMenu, subMenuIndex) => (
                                            checkSuccess(itemSubMenu?.for, userInfo?.role) ? (
                                                <li key={subMenuIndex}>
                                                    <NavLink to={itemSubMenu?.subMenuUrl}>{itemSubMenu.subMenuName}</NavLink>
                                                </li>
                                            ) : null
                                            )

                                        )}
                                    </ul>
                                ) : null}

                            </li>
                        ) : null
                        )

                    )}

                </ul>

            </div>
        </div>

    )
}

export default SideBar