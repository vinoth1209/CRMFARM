import {
  Avatar,
  Button,
  Descriptions,
  Divider,
  Flex,
  List,
  Popover,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { color, ComponentTitle } from "../widget/Styles";
import { BASE_URL } from "../../services/auth-services";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserOutlined } from "@ant-design/icons";
import { formatTimeWithAMPM } from "../widget/StyledComponents";
import { useEffect, useState } from "react";
import DragableModal from "../../components/Modal/DragableModal";
import {
  useContactAdditionalList,
  useContactAdditionalMyList,
} from "../APIs/ContactAPIs/ContactAPI";

const ContactsList = () => {
  const [loading, setLoading] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [openOverview, setOpenOverview] = useState(false);
  const [datas, setDatas] = useState({ results: [] });
  const { getContactList, isLoadingContactList, isErrorContactList } =
    useContactAdditionalList();
  const { getContactMyList, isLoadingContactMyList, isErrorContactMyList } =
    useContactAdditionalMyList();

  const handleOpenOverView = (item) => {
    setOpenOverview([
      {
        key: "1",
        label: "Created Date",
        children: item?.Updated_Date?.split("T")[0],
      },
      {
        key: "2",
        label: "Contact Id",
        children: item?.Contact_Id,
      },
      {
        key: "3",
        label: "Name",
        children: item?.Name,
      },
      {
        key: "4",
        label: "Phone Number",
        children: item?.Mobile_Number,
      },
      {
        key: "5",
        label: "Email Id",
        children: item?.Email_Id,
      },
      {
        key: "12",
        label: "No of Calls",
        children: item?.No_of_Calls || 0,
      },
      {
        key: "6",
        label: "Company Name",
        children: item?.Company_Name,
      },
      {
        key: "7",
        label: "Industry Type",
        children: item?.Industry_Type,
      },
      {
        key: "8",
        label: "City",
        children: item?.City,
      },
      {
        key: "9",
        label: "State",
        children: item?.State,
      },
      {
        key: "10",
        label: "Country",
        children: item?.Country,
      },

      {
        key: "11",
        label: "Last Update Date",
        children: `${item?.Updated_Date?.split("T")[0]} ${formatTimeWithAMPM(
          item?.Updated_Date
        )}`,
      },
    ]);
  };

  useEffect(() => {
    if (getContactList) {
      setDatas(getContactList);
    }
  }, [getContactList]);

  //   console.log("Success : ", openOverview);

  return (
    <>
      <Flex>
        <Typography.Title style={{ fontSize: ComponentTitle?.fontSize }}>
          Contact Lists ( {datas?.count} )
        </Typography.Title>
      </Flex>
      {isLoadingContactMyList || isLoadingContactList ? (
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
            dataLength={datas?.results?.length}
            //   next={loadMoreData}
            hasMore={datas?.results?.length < 50}
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
              dataSource={datas?.results}
              renderItem={(item, i) => (
                <List.Item
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenOverView(item);
                  }}
                  className="cursor-pointer my-2 md:mr-4 bg-[#ffffff] hover:bg-[#f9f9f9] hover:border-l-8 hover:border-[#45f9ff] rounded-md"
                  key={i}
                  style={{ padding: "20px 10px" }}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={"large"}
                        style={{ backgroundColor: "#f6f6f6" }}
                        src={`${BASE_URL}${item?.File?.split(".app")[1]}`}
                        icon={
                          Boolean(item?.File?.split(".app")[1]) && (
                            <UserOutlined style={{ color: [color[1]] }} />
                          )
                        }
                        alt="Profile picture"
                      />
                    }
                    title={<a>{item?.Name}</a>}
                    description={item?.Mobile_Number}
                  />
                  <div>
                    <div className="mb-4">
                      <Space classNames="">
                        <Button
                          onClick={(event) => {
                            event.stopPropagation();
                            alert("");
                          }}
                          style={{ outlineColor: "#f5f5f5" }}
                        >
                          Overview
                        </Button>

                        <Button onClick={(event) => {
                            event.stopPropagation();
                            setOpenAction(event.currentTarget);
                          }} style={{ outlineColor: "#f5f5f5" }}>
                          Action
                        </Button>

                  
                      </Space>
                    </div>
                    <Typography.Text>
                      {item?.Updated_Date?.split("T")[0]}
                    </Typography.Text>{" "}
                    <Typography.Text>
                      {formatTimeWithAMPM(item?.Updated_Date)}
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

export default ContactsList;
