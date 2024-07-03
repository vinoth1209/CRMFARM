import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, List, Skeleton, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { useTaskCalendarAdditional } from "../../APIs/TaskManagmentAPI";
import { BarChartSkeleton } from "../../widget/StyledComponents";
import CustomTable from "../../../components/Table/CustomTable";
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];
const ToDoList = () => {
  const {
    getTaskCalendarData,
    isLoadingTaskCalendarData,
    isErrorTaskCalendarData,
    refetchTaskCalendarData,
  } = useTaskCalendarAdditional();

  const [datas, setDatas] = useState("");

  const columns = [
    {
      title: "Task Name",
      key: "Task_Name",
      width: "40%",
    },
    {
      title: "Task Type",
      key: "Task_Type",
      width: "27%",
    },
    {
      title: "Deadline Date",
      key: "Deadline_Date",
      width: "33%",
    },
    {
      title: "Status",
      key: "Status",
    },
  ];

  useEffect(() => {
    if (getTaskCalendarData) {
      setDatas(getTaskCalendarData);
    }
  }, [getTaskCalendarData]);

  return (
    <>
      <CustomTable
        datas={datas}
        columm={columns}
        isLoading={isLoadingTaskCalendarData}
      />
    </>
  );
};
export default ToDoList;
