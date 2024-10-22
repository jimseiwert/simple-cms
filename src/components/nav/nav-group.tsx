import { ChevronRight, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import {
  Collapsible,
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
} from "@/components/ui/sidebar"

import { ISidebarItem } from "@/interfaces/sidebar-item.interfsace";

function MenuLink(item: ISidebarItem) {
  return ( <SidebarMenuItem key={item.name}>
             <SidebarMenuButton asChild>
               <Link href={item.url ?? "#"} title={item.name}>
                 <span>{item.emoji}</span>
                 <span>{item.name}</span>
               </Link>
             </SidebarMenuButton>
           </SidebarMenuItem>);
}

function ChildMenu(workspace: ISidebarItem) {
  console.log("returning child menu link")
  return (<Collapsible key={workspace.name}>
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link href={workspace.url ?? "#"}>
          <span>{workspace.emoji}</span>
          <span>{workspace.name}</span>
        </Link>
      </SidebarMenuButton>
      <CollapsibleTrigger asChild>
        <SidebarMenuAction
          className="left-2 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90"
          showOnHover
        >
          <ChevronRight />
        </SidebarMenuAction>
      </CollapsibleTrigger>
    </SidebarMenuItem>
  </Collapsible>)
}

function Menu(item: ISidebarItem) {
  if (item.pages && item.pages.length >0) {
    return ChildMenu(item);
  } else {
    return MenuLink(item);
  }
}

function ShowMore() {
  return (
    <SidebarMenuItem>
    <SidebarMenuButton className="text-sidebar-foreground/70">
      <MoreHorizontal />
      <span>More</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
  )
}

export function NavGroup({
  name, 
  showMore = false,
  items,
}: {
  name: string,
  showMore?: boolean,
  items: ISidebarItem[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{name}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => Menu(item))}
          {showMore && ShowMore()}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}