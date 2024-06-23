type MenuElement = {
    tooltip:string,
    icon: Icon,
    execute: () => void
    key: string
}

type Icon = React.ReactElement;