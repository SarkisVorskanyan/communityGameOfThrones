import React, {FC, useEffect, useState} from 'react'
import { useAppSelector } from '../../store/StoreHooks'
import './SideBar.scss'
import { RiAdminLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { SideBarData } from '../../utils/data/SidebarData/SideBarData';

const SideBar: FC = () => {
    const {toggleSideBar} = useAppSelector(state => state.settings)
    const [subMenuId, setSubMenuId] = useState<number | null>(null)

    const openOrCloseSubMenu = (index: number | null) => {

        if(index === subMenuId){
            setSubMenuId(null)
        }else{
            setSubMenuId(index)
        }
    }

    useEffect(() => {
        setSubMenuId(null)
    }, [toggleSideBar])


    return (
        <div className={toggleSideBar ? 'sideBar_container_active' : 'sideBar_container'}>
            <div className='sidebar_subContainer'>
                <ul className={'nav-links'}>
                    {SideBarData.map((item, index) =>
                        <li style={{overflow: index === subMenuId ? 'visible' : 'hidden'}} key={index}>
                            <div className={'link_item'}
                                 onClick={() => item?.subMenu ? openOrCloseSubMenu(index) : openOrCloseSubMenu(null)}
                                 style={{justifyContent: toggleSideBar ? 'space-between' : 'flex-end'}}>
                            <span>
                                <span className={toggleSideBar ? 'sideBar_icon' : 'sideBar_icon_inActive'}>
                                    {item.icon}
                                </span>
                                {/*<RiAdminLine className={toggleSideBar ? 'sideBar_icon' : 'sideBar_icon_inActive'}/>*/}
                                {toggleSideBar ? <a>{item.name}</a> : null}
                            </span>
                                {item?.subMenu && toggleSideBar ? <IoIosArrowDown
                                                                        className={index === subMenuId ? 'arrow_up' : 'arrow_down'} /> : null}
                            </div>

                            {item?.subMenu ? (
                                <ul className={index === subMenuId ? toggleSideBar ? 'sub_menu_active' : 'sub_menu_close' : 'sub_menu'}>
                                    {item?.subMenu.map((itemSubMenu, subMenuIndex) =>
                                        <li key={subMenuIndex}>
                                            <a>{itemSubMenu.subMenuName}</a>
                                        </li>
                                    )}
                                </ul>
                            ) : null}

                            {/*{item?.subMenu ? (*/}
                            {/*    item?.subMenu.map((itemSubMenu, subMenuIndex) =>*/}
                            {/*        <ul key={subMenuIndex} className={index === subMenuId ? 'sub_menu_active' : 'sub_menu'}>*/}
                            {/*            <li>*/}
                            {/*                <a>{itemSubMenu.subMenuName}</a>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    )*/}
                            {/*) : null}*/}
                        </li>
                    )}

                </ul>

                {/*<ul>*/}
                {/*    {SideBarData.map((item, index) =>*/}
                {/*        <li><a href="#">Dropdown</a>*/}
                {/*            <ul>*/}
                {/*                <li><a href="#">Secondary</a></li>*/}
                {/*                <li><a href="#">Secondary</a></li>*/}
                {/*                <li><a href="#">Secondary</a></li>*/}
                {/*            </ul>*/}
                {/*        </li>*/}
                {/*    )}*/}
                {/*    <li><a href="#">Dropdown</a>*/}
                {/*        <ul>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*        </ul>*/}
                {/*    </li>*/}
                {/*    <li><a href="#">Dropdown</a>*/}
                {/*        <ul>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*        </ul>*/}
                {/*    </li>*/}
                {/*    <li><a href="#">Dropdown</a>*/}
                {/*        <ul>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*            <li><a href="#">Secondary</a></li>*/}
                {/*        </ul>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </div>

    )
}

export default SideBar