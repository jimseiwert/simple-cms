import React from 'react';
import { AppSidebar } from "@/app/layouts/app-sidebar"
import { NavActions } from "@/components/nav/nav-actions"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { INavActions } from '@/interfaces/sidebar-item.interfsace';

interface AuthLayoutProps {
    breadcrumbs?: string[];
    subLabel?: string;
    navActions?: INavActions[];
    children: React.ReactNode;
}
const AuthLayout = ({ navActions, children, subLabel, breadcrumbs }: AuthLayoutProps) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="flex h-14 shrink-0 items-center gap-2">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
            {breadcrumbs?.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                <BreadcrumbItem key={'BCI' +  index}>
                  <BreadcrumbPage key={'BCP' + index} className="line-clamp-1">
                    {breadcrumb}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator key={'BCS' + index} />}
                </React.Fragment>
            ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="ml-auto px-3">
          <NavActions actions={navActions} subLabel={subLabel} />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 px-4 py-10">
      {children}
      </div>
    </SidebarInset>
  </SidebarProvider>
  );
};

export default AuthLayout;