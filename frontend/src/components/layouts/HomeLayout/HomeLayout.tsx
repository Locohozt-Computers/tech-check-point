import React from "react";
import Navbar from "../Navbar";
import SideMenus from "../SidebarMenus";

import { Content, Dashboard, Sidebar } from "./style";

const HomeLayout: React.FC = ({ children }) => {
  return (
    <Dashboard>
      <Sidebar>
        <SideMenus />
      </Sidebar>
      <Content>
        <Navbar />
        {children}
      </Content>
    </Dashboard>
  );
};

export default HomeLayout;
