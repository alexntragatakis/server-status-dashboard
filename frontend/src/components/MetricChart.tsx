import { useEffect } from "react";
import { Line, LineChart } from "recharts";

interface Props {
  title: string;
  data: number[];
}

const MetricChart = ({ title, data }: Props) => {
  const testDataPoints = [];
  for (let i = 0; i < 10; i++) {
    testDataPoints.push({ index: i, value: data[i] });
  }

  return (
    <LineChart
      title={title}
      style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={testDataPoints}
    >
      <Line dataKey="value" />
    </LineChart>
  );
};

export default MetricChart;
