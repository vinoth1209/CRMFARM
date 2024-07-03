import { Button, Image, Menu, Typography } from "antd";
import { navLinks } from ".";
import { useNavigate } from "react-router-dom";
import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";
import { useStateContext } from "../../context/useStateContext/ContextProvider";

const Sidebar = () => {
  const navigate = useNavigate();
  const { showSidebar, handleSidebar } = useStateContext();

  const navItem = (nav, level = 0) => {
    // console.log("nav : ", nav);
    return nav?.map((item, i) => {
      return {
        key: item?.path + "@" + (level + " " + i),
        path: item?.path,
        icon: item?.icon,
        label: item?.title,
        children: navItem(item?.children, level + 1),
      };
    });
  };

  const item1 = navItem(navLinks);

  const onClick = (e) => {
    console.log("click ", e?.key);
    navigate(e?.key?.split("@")[0]);
  };

  return (
    <>
     
      <div className=" h-full overflow-y-hidden">
         <div className={`flex items-center ${!showSidebar?'justify-between ':'justify-center'} `}>
       { !showSidebar && <Typography.Text>CRMFARM</Typography.Text>}
       
      </div>
        <div className=" h-full overflow-y-auto">
        <Menu
          onClick={onClick}
          className="p-0 bg-transparent"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
            fontSize: "12px",
          }}
          items={item1}
        />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
