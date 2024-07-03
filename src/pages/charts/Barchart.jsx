import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { color } from "../widget/Styles";

const Barchart = ({ data = [], legend, label = "label" }) => {
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
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={label} />
          <YAxis />
          <Tooltip />
          <Legend />
          {legend?.map((_, index) => (
            // eslint-disable-next-line react/jsx-key
            <Bar key={index} dataKey={legend?.[index]} fill={color?.[index]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
