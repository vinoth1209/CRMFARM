import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Empty, Input, List, Skeleton, Space, Table } from "antd";
import Highlighter from "react-highlight-words";

const CustomTable = ({ datas = [], columm = [], height = 250, isLoading }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = columm?.map((col) => ({
    title: col?.title,
    dataIndex: col?.key,
    key: col?.key,
    width: col?.width || "auto",
    ...getColumnSearchProps(col?.key),
    sorter: (a, b) =>
      (Boolean(Number(a?.[col?.key])) ? a?.[col?.key] : a?.[col?.key]?.length) -
      (Boolean(Number(b?.[col?.key])) ? b?.[col?.key] : b?.[col?.key]?.length),
    sortDirections: ["descend", "ascend"],
  }));

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton active avatar>
            <List.Item.Meta />
          </Skeleton>
          <br />
          <Skeleton active avatar>
            <List.Item.Meta />
          </Skeleton>
        </>
      ) : datas?.length > 0 ? (
        <Table
          style={{ height }}
          className="overflow-y-auto"
          columns={columns}
          dataSource={datas}
        />
      ) : (
        <Empty />
      )}
    </>
  );
};
export default CustomTable;
