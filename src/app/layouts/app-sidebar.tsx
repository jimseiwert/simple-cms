"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavMain } from "@/components/nav/nav-main"
import { NavGroup } from "@/components/nav/nav-group"
import { TeamSwitcher } from "@/components/nav/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Member",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Admin",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  member: [
    {
      name: "Dashboard",
      url: "/member/dashboard",
      emoji: "📊",
    },
    {
      name: "Events",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fishing",
      url: "#",
      emoji: "💪",
    },
    
  ],
  admin: [
    {
      name: "General Settings",
      url: "/admin/settings/general",
      emoji: "💪",
    },
    {
      name: "Pages",
      url: "/admin/pages/dashboard",
      emoji: "💪",
    },
    {
      name: "Data",
      url: "/admin/data/dashboard",
      emoji: "💪",
    },
    {
      name: "Member",
      emoji: "💼",
      pages: [
        {
          name: "Applications",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Manage",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Work",
          url: "#",
          emoji: "🧠",
        },
      ],
    },
    {
      name: "Documents",
      emoji: "🏡",
      pages: [
        {
          name: "Bulletin",
          url: "#",
          emoji: "💰",
        },
        {
          name: "Minutes",
          url: "#",
          emoji: "🔧",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroup name="Member" items={data.member} />
        <NavGroup name="Admin" items={data.admin} />
        {/* <NavWorkspaces name="Admin" workspaces={data.admin} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
