import {
  AppstoreOutlined,
  BarChartOutlined,
  BellOutlined,
  HolderOutlined,
  MessageOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Flex, FloatButton, Space, Tooltip } from "antd";
import { color } from "../../pages/widget/Styles";
import { useStateContext } from "../../context/useStateContext/ContextProvider";
import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";

const Main = () => {
  const { showSidebar, handleSidebar } = useStateContext();

  return (
    <div className="px-5 justify-between items-center flex">
      {/* <FloatButton.Group shape="circle" style={{ right: 24 + 70 }}> */}
      <div>
        {
          <Button onClick={handleSidebar} type="" shape="circle">
            {showSidebar ? (
              <RiMenuFoldLine style={{ fontSize: 15 }} />
            ) : (
              <RiMenuFold2Line style={{ fontSize: 15 }} />
            )}
          </Button>
        }
        </div>
      <Space size={16}>
       
        <Avatar
          className="cursor-pointer shadow-md"
          style={{ backgroundColor: "#f9f9f9" }}
          icon={<BarChartOutlined style={{ color: "#000" }} />}
        />
        <Badge size="small" count={1}>
          <Avatar
            className="cursor-pointer shadow-md"
            style={{ backgroundColor: "#f9f9f9" }}
            icon={<BellOutlined style={{ color: "#000" }} />}
          />
        </Badge>
        <Badge count={0}>
          <Avatar
            className="cursor-pointer shadow-md"
            style={{ backgroundColor: "#f9f9f9" }}
            icon={<MessageOutlined style={{ color: "#000" }} />}
          />
        </Badge>
        <Badge count={0}>
          <Avatar
            className="cursor-pointer shadow-md"
            style={{ backgroundColor: "#f9f9f9" }}
            icon={<SettingOutlined style={{ color: "#000" }} />}
          />
        </Badge>
        <Badge count={0}>
          <Avatar
            className="cursor-pointer shadow-md"
            style={{ backgroundColor: "#f9f9f9" }}
            icon={<AppstoreOutlined style={{ color: "#000" }} />}
          />
        </Badge>

        <Avatar
          className="cursor-pointer shadow-lg"
          style={{ backgroundColor: color[1] }}
        >
          AD
        </Avatar>
      </Space>
      {/* </FloatButton.Group> */}
    </div>
  );
};

export default Main;
