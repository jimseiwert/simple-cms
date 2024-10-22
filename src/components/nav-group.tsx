import { ChevronRight, MoreHorizontal, Plus } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

function Link(item) {
  return ( <SidebarMenuItem key={item.name}>
             <SidebarMenuButton asChild>
               <a href={item.url} title={item.name}>
                 <span>{item.emoji}</span>
                 <span>{item.name}</span>
               </a>
             </SidebarMenuButton>
           </SidebarMenuItem>);
}

function ChildMenu(workspace) {
  console.log("returning child menu link")
  return (<Collapsible key={workspace.name}>
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href={workspace.url ?? "#"}>
          <span>{workspace.emoji}</span>
          <span>{workspace.name}</span>
        </a>
      </SidebarMenuButton>
      <CollapsibleTrigger asChild>
        <SidebarMenuAction
          className="left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90"
          showOnHover
        >
          <ChevronRight />
        </SidebarMenuAction>
      </CollapsibleTrigger>
      <SidebarMenuAction showOnHover>
        <Plus />
      </SidebarMenuAction>
      <CollapsibleContent>
        <SidebarMenuSub>
          {workspace.pages?.map((page) => (
            <SidebarMenuSubItem key={page.name}>
              <SidebarMenuSubButton asChild>
                <a href="#">
                  <span>{page.emoji}</span>
                  <span>{page.name}</span>
                </a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>)
}

function Menu(workspace) {
  if (workspace.item.pages && workspace.item.pages.length >0) {
    return ChildMenu(workspace.item);
  } else {
    return Link(workspace.item);
  }
}

export function NavGroup({
  name, 
  showMore = false,
  items,
}: {
  name: string,
  showMore?: boolean,
  items: {
    name: string
    emoji: React.ReactNode
    url?: string
    pages?: {
      name: string
      emoji: React.ReactNode
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{name}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((workspace) => (
            <Menu key={workspace.name} item={workspace} />
          ))}
          {showMore && (
            <SidebarMenuItem>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <MoreHorizontal />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
