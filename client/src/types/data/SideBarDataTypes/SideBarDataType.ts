import {IconBaseProps, IconType} from "react-icons";

export interface SideBarDataType {
    name: string,
    url: string,
    icon: JSX.Element,
    subMenu?: subMenuType[]
}


interface subMenuType {
    subMenuName: string,
    subMenuUrl: string
}

