export interface ISidebarItem {
    name: string
    emoji: React.ReactNode
    url?: string
    pages?: {
        name: string
        emoji: React.ReactNode
    }[]
}


export interface INavActionItem {
    label: string;
    icon: React.ElementType;
    click?: () => void;
}

export interface INavActions {
    items: INavActionItem[]
}   