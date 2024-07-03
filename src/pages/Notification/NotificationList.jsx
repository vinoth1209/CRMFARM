import {
  Avatar,
  Button,
  Descriptions,
  Divider,
  Flex,
  List,
  Skeleton,
  Typography,
} from "antd";
import { color, ComponentTitle } from "../widget/Styles";
import { useQuery } from "react-query";
import { axiosInstance } from "../../services/config";
import { BASE_URL } from "../../services/auth-services";
import InfiniteScroll from "react-infinite-scroll-component";
import { BellOutlined } from "@ant-design/icons";
import { formatTimeWithAMPM } from "../widget/StyledComponents";
import { useEffect, useState } from "react";
import DragableModal from "../../components/Modal/DragableModal";

const NotificationList = () => {
  const [loading, setLoading] = useState(false);
  const [openOverview, setOpenOverview] = useState(false);
  const [datas, setDatas] = useState([]);

  const handleOpenOverView = (item) => {
    setOpenOverview([
      {
        key: "1",
        label: "Notification Id",
        children: item?.Notification_Id,
      },
      {
        key: "2",
        label: "Notification Name",
        children: item?.Notificationname,
      },
      {
        key: "3",
        label: "Notification Module",
        children: item?.NotificationModule,
      },
      {
        key: "4",
        label: "Notification Time",
        children: `${
          item?.Notification_Time?.split("T")[0]
        } ${formatTimeWithAMPM(item?.Notification_Time)}`,
      },
      {
        key: "4",
        label: "Last Update Date",
        children: `${item?.Updated_Date?.split("T")[0]}`,
      },
      {
        key: "4",
      },
      {
        key: "5",
        label: "Notification Msg",
        children: item?.NotificationMsg,
      },
    ]);
  };

  // < ------ get User Notification Additional------------->
  const getUserNotificationAdditional = async () => {
    try {
      const response = await axiosInstance.get(
        `${BASE_URL}/user/UserNotificationAdditional/`
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching data for  User Notification Additional:",
        error
      );
      throw new Error(
        error.response?.data?.message ||
          "Error fetching data for User Notification Additional"
      );
    }
  };

  // < ------- start use query functions -------------->

  const { data, isLoading, isError, refetch } = useQuery(
    "refetchUserNotificationAdditional",
    getUserNotificationAdditional,
    {
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    if (data) {
      setDatas(data);
    }
  }, [data]);

  //   console.log("Success : ", openOverview);

  return (
    <>
      <Flex>
        <Typography.Title style={{ fontSize: ComponentTitle?.fontSize }}>
          Notifications ( {datas?.length} )
        </Typography.Title>
      </Flex>
      {isLoading ? (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={i}
              className="my-8"
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          ))}
        </>
      ) : (
        <div
          id="scrollableDiv"
          style={{
            height: "75vh",
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            dataLength={datas?.length}
            //   next={loadMoreData}
            hasMore={datas?.length < 50}
            //   loader={
            //     <Skeleton
            //       avatar
            //       paragraph={{
            //         rows: 1,
            //       }}
            //       active
            //     />
            //   }
            endMessage={<Divider plain>It is all, nothing more</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={datas}
              renderItem={(item, i) => (
                <List.Item
                  onClick={() => handleOpenOverView(item)}
                  className="cursor-pointer my-2 md:mr-4 bg-[#ffffff] hover:bg-[#f9f9f9] hover:border-l-8 hover:border-[#45f9ff] rounded-md"
                  key={i}
                  style={{ padding: "20px 10px" }}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{ backgroundColor: "#f6f6f6" }}
                        src={item?.picture?.large}
                        icon={<BellOutlined style={{ color: [color[1]] }} />}
                        alt="Profile picture"
                      />
                    }
                    title={<a>{item?.NotificationModule}</a>}
                    description={item?.NotificationMsg}
                  />
                  <div>
                    <Typography.Text>
                      {item?.Notification_Time?.split("T")[0]}
                    </Typography.Text>{" "}
                    <Typography.Text>
                      {formatTimeWithAMPM(item?.Notification_Time)}
                    </Typography.Text>
                  </div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      )}

      {/* Modal overview */}
      <DragableModal
        open={openOverview}
        width={700}
        setOpen={setOpenOverview}
        handleCancel={() => setOpenOverview(false)}
        footer={[
          <Button
            type="default"
            style={{ outlineColor: "#f5f5f5" }}
            key="back"
            onClick={() => setOpenOverview(false)}
          >
            Close
          </Button>,
        ]}
        content={
          <Descriptions
            // title="Custom Size"
            size={"default"}
            column={2}
            // extra={<Button type="primary">Edit</Button>}
            items={openOverview}
          />
        }
      />
    </>
  );
};

export default NotificationList;
