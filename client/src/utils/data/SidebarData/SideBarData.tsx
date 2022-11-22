import {SideBarDataType} from "../../../types/data/SideBarDataTypes/SideBarDataType";
import { RiAdminLine } from 'react-icons/ri';
import {useAppSelector} from "../../../store/StoreHooks";
import '../../../components/sideBar/SideBar.scss'



export const SideBarData: SideBarDataType[] = [
    {
        name: 'Админ',
        url: '#',
        icon: <RiAdminLine />,
        subMenu: [
            {
                subMenuName: 'Пользователи',
                subMenuUrl: 'url'
            },
        ]
    },
]
