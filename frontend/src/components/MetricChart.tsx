import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  title: string;
  data: number[]; // will be the last 60 seconds of data
}

const MetricChart = ({ title, data }: Props) => {
  const dataPoints = data.map((value, index) => ({
    time: new Date(Date.now() - (59 - index) * 1000),
    value: value,
  }));

  return (
    <div>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dataPoints}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            type="number"
            scale="time"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString()}
          />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip
            labelFormatter={(unixTime) => new Date(unixTime).toLocaleString()}
            formatter={(value) => [`${value}%`, 'Value']}
          />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricChart;
