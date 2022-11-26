export interface SideBarDataType {
    name: string,
    url: string,
    icon: JSX.Element,
    for: string,
    subMenu?: subMenuType[]
}


interface subMenuType {
    subMenuName: string,
    subMenuUrl: string,
    for: string
}

