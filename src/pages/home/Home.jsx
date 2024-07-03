import {
  ChromeOutlined,
  InstagramOutlined,
  SecurityScanOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Skeleton, Typography } from "antd";
import { useEffect, useState } from "react";

import { ComponentTitle } from "../widget/Styles";
import Counter from "../widget/StyledComponents";
import PieCharts from "./dashboard/PieChart";
import ToDoList from "./dashboard/ToDoList";
import Barcharts from "./dashboard/Barcharts";
import {
  useLeadCampaign,
  useLeadContact,
  useLeadEnquiry,
  useLeadSocialMedia,
  useLeadWeb,
} from "../APIs/HomeAPI";
import Piechart from "./dashboard/PieChart";
const { Meta } = Card;

const HomeDashboard = () => {
  const { getLeadEnquiryData, isLoadingGetLeadEnquiryData } = useLeadEnquiry();
  const { getLeadCampaignData, isLoadingGetLeadCampaignData } =
    useLeadCampaign();
  const { getLeadSocialMediaData, isLoadingGetLeadSocialMediaData } =
    useLeadSocialMedia();
  const { getLeadEWebData, isLoadingGetLeadEWebData } = useLeadWeb();
  const { getLeadContactData, isLoadingGetLeadContactData } = useLeadContact();

  const [Leads, setLeads] = useState([
    {
      value: 0,
      icon: <UserOutlined style={{ fontSize: 22 }} />,
      title: "Contact",
      status: true,
    },
    {
      value: 0,
      icon: <ChromeOutlined style={{ fontSize: 22 }} />,
      title: "Web",
      status: true,
    },
    {
      value: 0,
      icon: <SecurityScanOutlined style={{ fontSize: 22 }} />,
      title: "Enquiry",
      status: true,
    },
    {
      value: 0,
      icon: <SoundOutlined style={{ fontSize: 22 }} />,
      title: "Campaign",
      status: true,
    },
    {
      value: 0,
      icon: <InstagramOutlined style={{ fontSize: 22 }} />,
      title: "SocialMedia",
      status: true,
    },
  ]);

  useEffect(() => {
    setLeads((prev) =>
      prev?.map((item) => {
        if (item.title === "Enquiry") {
          return {
            ...item,
            value: getLeadEnquiryData?.Lead_by_Enquiry_ForYear,
            status: isLoadingGetLeadEnquiryData,
          };
        } else if (item.title === "Campaign") {
          return {
            ...item,
            value: getLeadCampaignData?.Lead_by_Campaign_ForYear || 0,
            status: isLoadingGetLeadCampaignData,
          };
        } else if (item.title === "SocialMedia") {
          return {
            ...item,
            value: getLeadSocialMediaData?.Lead_by_SocialMedia_ForYear || 0,
            status: isLoadingGetLeadSocialMediaData,
          };
        } else if (item.title === "Web") {
          return {
            ...item,
            value: getLeadEWebData?.Lead_by_Web_ForYear || 0,
            status: isLoadingGetLeadEWebData,
          };
        } else if (item.title === "Contact") {
          return {
            ...item,
            value: getLeadContactData?.Lead_by_Contact_ForYear || 0,
            status: isLoadingGetLeadContactData,
          };
        }
      })
    );
  }, [
    getLeadEnquiryData,
    getLeadCampaignData,
    getLeadSocialMediaData,
    getLeadEWebData,
    getLeadContactData,
    isLoadingGetLeadEnquiryData,
    isLoadingGetLeadCampaignData,
    isLoadingGetLeadSocialMediaData,
    isLoadingGetLeadEWebData,
    isLoadingGetLeadContactData,
  ]);

  const color = ["#c41d7f", "#531dab", "#08979c", "#389e0d", "#d46b08"];

  return (
    <div>
      <section>
        <Typography.Title style={{ fontSize: ComponentTitle?.fontSize }}>
          Lead Overview (Current Year)
        </Typography.Title>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {Leads?.map((item, i) => (
            <Card
              key={i}
              hoverable
              style={{ backgroundColor: !item?.status && color[i] }}
              className={`w-full h-full max-h-36`}
              cover={
                item?.status && <Skeleton avatar className="p-3" active round />
              }
            >
              {!item?.status && (
                <Meta
                  avatar={item?.icon}
                  className="text-white"
                  title={
                    <Typography
                      className="text-white md:ml-5"
                      style={{ fontSize: 16 }}
                    >
                      {item?.title}
                    </Typography>
                  }
                  description={
                    <Typography
                      className="text-white md:ml-5"
                      style={{ fontSize: 20 }}
                    >
                      {<Counter maximum={item?.value} speed={50} />}
                    </Typography>
                  }
                />
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <div className=" grid grid-cols-1 lg:grid-cols-2 max-xl::grid-cols-3 gap-3">
          <Card
            hoverable
            // style={{ backgroundColor: !item?.status && color[i] }}
            className={`w-full h-full `}
            // cover={<Skeleton avatar className="p-3" active round />}
          >
            <Typography.Title
              className="mb-4 -translate-y-3"
              style={{ fontSize: ComponentTitle?.fontSize }}
            >
              Sales (last Year)
            </Typography.Title>
            <Barcharts />
          </Card>

          <Card
            hoverable
            // style={{ backgroundColor: !item?.status && color[i] }}
            className={`w-full h-full `}
            // cover={<Skeleton avatar className="p-3" active round />}
          >
            <Typography.Title
              className="mb-4 -translate-y-3"
              style={{ fontSize: ComponentTitle?.fontSize }}
            >
              Orders
            </Typography.Title>

            <Piechart />
          </Card>

          <Card
            hoverable
            // style={{ backgroundColor: !item?.status && color[i] }}
            className={`w-full h-full `}
            // cover={<Skeleton avatar className="p-3" active round />}
          >
            <Typography.Title
              className="mb-4 -translate-y-3"
              style={{ fontSize: ComponentTitle?.fontSize }}
            >
              Sales
            </Typography.Title>

            <PieCharts />
          </Card>

          <Card
            hoverable
            // style={{ backgroundColor: !item?.status && color[i] }}
            className={`w-full h-full `}
            // cover={<Skeleton avatar className="p-3" active round />}
          >
            <Typography.Title
              className="mb-4 -translate-y-3"
              style={{ fontSize: ComponentTitle?.fontSize }}
            >
              To Do List
            </Typography.Title>

            <ToDoList />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomeDashboard;
