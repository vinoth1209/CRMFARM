import { Button, Layout } from "antd";
import Headers from "./header/Headers";
import Sidebar from "./sidebar/Sidebar";
import Routeses from "../routes/Routes";
import { useState } from "react";
import { useStateContext } from "../context/useStateContext/ContextProvider";
import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";

const { Header, Footer, Sider, Content } = Layout;

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { showSidebar, handleSidebar } = useStateContext();


  return (
    <Layout className="w-screen h-screen  ">
      {/*---------------------- Sidebar ------------------------ */}
      <Sider trigger={null} collapsible  collapsed={showSidebar} onCollapse={handleSidebar}
        width={250}
        style={{ backgroundColor: "#fcfcfc" }}
        className="py-4 px-2 shadow-md  fixed top-0"
      >

        <Sidebar />

        
      </Sider>
      
      <Layout>
        {/* --------------------- Header ------------------------- */}
        <Header className="bg-[#fcfcfc] px-3 shadow-sm border-b-[1px]">
          <Headers />
        </Header>

        {/* --------------------- Main Content ------------------- */}
        <Content className="p-6 overflow-x-hidden bg-[#F9F9F9]">
          <Routeses />
        </Content>

        {/* --------------------- Footer ------------------------- */}
        <Footer className="bg-[#F9F9F9] py-2 px-3 shadow-md border-t-[1px] text-black">
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
