import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieCharts = ({
  outerRadius = 95,
  innerRadius = 60,
  value = "value",
  name = "name",
  color = "#82ca9d",
  data = [],
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // maxWidth: "800px",
        margin: "auto",
      }}
    >
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey={value}
            nameKey={name}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill={color}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieCharts;
