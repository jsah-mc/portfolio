import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"

import { Home, LayoutDashboard, Info } from "lucide-react"
import { VscGithub } from "react-icons/vsc";

const items = [
  {
    url: "/",
    icon: Home,
  },
 {
    url: "/about",
    icon: Info,
  }
]
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-row items-center justify-center p-4 gap-2">
            <LayoutDashboard />
        </div>
      </SidebarHeader>
      <SidebarContent>
         <SidebarMenu className="flex-1 flex items-center justify-center">
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem className="flex justify-center" key="github">
          <SidebarMenuButton className="flex items-center justify-center">
            <a href="https://github.com/jsah-mc">
              <VscGithub />
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  )
}