export interface ISidebarItem {
        name: string
        emoji: React.ReactNode
        url?: string
        pages?: {
          name: string
          emoji: React.ReactNode
        }[]
    }