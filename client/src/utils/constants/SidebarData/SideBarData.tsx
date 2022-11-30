import {SideBarDataType} from "../../../types/data/SideBarDataTypes/SideBarDataType";
import { RiAdminLine } from 'react-icons/ri';
import '../../../components/sideBar/SideBar.scss'



export const SideBarData: SideBarDataType[] = [
    {
        name: 'Админ',
        url: '#',
        icon: <RiAdminLine />,
        for: 'owner',
        subMenu: [
            {
                subMenuName: 'Пользователи',
                subMenuUrl: '/adminUsers',
                for: 'owner'
            },
            {
                subMenuName: 'Ролы',
                subMenuUrl: '/adminRoles',
                for: 'owner'
            },
        ]
    },
]
