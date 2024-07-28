export type MenuElementItem = {
    tooltip:string,
    icon: Icon,
    execute: () => void
    key: string
}

export type Icon = React.ReactElement;