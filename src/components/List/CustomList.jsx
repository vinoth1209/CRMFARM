import React, { useEffect, useState } from "react";
import { Avatar, Divider, List, message, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { CiOutlined, MessageOutlined } from "@ant-design/icons";
import { formatTimeWithAMPM } from "../../pages/widget/StyledComponents";
const CustomList = ({ data = [] }) => {
  const [loading, setLoading] = useState(false);
  const [datas, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...datas, ...body.results]);
        message.success(`${body.results.length} more items loaded!`);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log("getUserNotificationData", data);
    loadMoreData();
  }, [data]);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "73vh",
        overflow: "auto",
        padding: "0 16px",
        // border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className="cursor-pointer my-2 bg-[#ffffff] hover:bg-[#f9f9f9] hover:border-l-8 hover:border-[#45f9ff] rounded-md"
              key={item?.NotificationMsg}
              style={{ padding: "20px 10px" }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={item?.picture?.large}
                    icon={<MessageOutlined />}
                    alt="Profile picture"
                  />
                }
                title={
                  <a href="https://ant.design">{item?.NotificationModule}</a>
                }
                description={item?.NotificationMsg}
              />
              <div>{formatTimeWithAMPM(item?.Notification_Time)}</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default CustomList;
