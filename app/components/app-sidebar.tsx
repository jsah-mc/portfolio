import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { Home, Info, LayoutDashboard } from "lucide-react";
import { VscGithub } from "react-icons/vsc";

const items = [
  {
    url: "/",
    icon: Home,
    label: "Home",
  },
  {
    url: "/about",
    icon: Info,
    label: "About",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="p-3" variant="floating">
      <SidebarHeader>
        <div className="glass-panel flex flex-row items-center justify-center gap-2 rounded-[1.5rem] p-4 text-white">
          <LayoutDashboard className="h-5 w-5" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="flex flex-1 items-center justify-center gap-3">
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton
                asChild
                className="glass-panel glass-shine h-12 w-12 rounded-2xl text-white transition-transform duration-300 hover:scale-105 hover:bg-white/15"
                tooltip={item.label}
              >
                <a href={item.url} aria-label={item.label}>
                  <item.icon className="h-5 w-5" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem className="flex justify-center" key="github">
          <SidebarMenuButton
            asChild
            className="glass-panel glass-shine h-12 w-12 rounded-2xl text-white transition-transform duration-300 hover:scale-105 hover:bg-white/15"
            tooltip="GitHub"
          >
            <a href="https://github.com/jsah-mc" aria-label="GitHub profile">
              <VscGithub className="h-5 w-5" />
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
