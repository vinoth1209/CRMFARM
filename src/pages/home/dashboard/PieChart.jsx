import { Empty } from "antd";
import PieCharts from "../../charts/PieChart";
import { BarChartSkeleton } from "../../widget/StyledComponents";

const Piechart = () => {
  const data01 = [
    {
      name: "Group A",
      value: 0,
    },
    {
      name: "Group B",
      value: 0,
    },
    {
      name: "Group C",
      value: 0,
    },
    {
      name: "Group D",
      value: 0,
    },
    {
      name: "Group E",
      value: 0,
    },
    {
      name: "Group F",
      value: 0,
    },
  ];
  return (
    <div>
      {false ? (
        <BarChartSkeleton barsCount={4} />
      ) : data01?.every((item) => item?.value == 0) ? (
        <Empty />
      ) : (
        <PieCharts data={data01} />
      )}
    </div>
  );
};

export default Piechart;
