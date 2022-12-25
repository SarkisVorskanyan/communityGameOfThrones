import React, {FC, useEffect, useRef, useState} from 'react'
import {useAppSelector} from '../../store/StoreHooks'
import './SideBar.scss'
import {IoIosArrowDown} from 'react-icons/io';
import {NavLink, useNavigate} from 'react-router-dom';
import {SideBarDataType} from './../../types/data/SideBarDataTypes/SideBarDataType';
import {checkSuccess} from '../../helpers/customHelpers/CustomHelpers';
import useOnClickOutSide from '../../helpers/customHooks/UseOnClickOutSide'
import {SideBarData} from '../../utils/constants/SidebarData/SideBarData';


const SideBar: FC = () => {
    const {toggleSideBar} = useAppSelector(state => state.settings)
    const {userInfo} = useAppSelector(state => state.auth)
    const [subMenuId, setSubMenuId] = useState<number | null>(null)
    const ref = useRef<any>()
    const navigation = useNavigate()


    const openOrCloseSubMenu = (item: SideBarDataType, index: number) => {
        if(item?.subMenu){
            if(index === subMenuId){
                setSubMenuId(null)
            }else{
                setSubMenuId(index)
            }
        }else{
            setSubMenuId(null)
        }
        
    }

    useOnClickOutSide(ref, () => setSubMenuId(null))

    useEffect(() => {
        setSubMenuId(null)
    }, [toggleSideBar])


    const navigateTo = (url: string) => {
        navigation(url)
        if(!toggleSideBar){
            setSubMenuId(null)
        }

    }


    return (
        <div className={toggleSideBar ? 'sideBar_container_active' : 'sideBar_container'}>
            <div className='sidebar_subContainer'>
                <ul className={'nav-links'}>
                    {SideBarData.map((item, index) => (
                        checkSuccess(item?.for, userInfo?.role) ? (
                            <li
                                ref={ref}
                                style={{overflow: index === subMenuId ? 'visible' : 'hidden'}} key={index}>
                                <div className={'link_item'}
                                     onClick={() => openOrCloseSubMenu(item, index)}
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
                                                <li onClick={() => navigateTo(itemSubMenu?.subMenuUrl)} key={subMenuIndex}>
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

