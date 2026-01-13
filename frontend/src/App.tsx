import { useEffect, useState } from "react";
import "./App.css";
import StatusInfo from "./components/StatusInfo";
import MetricChart from "./components/MetricChart";

export type metrics = {
  status: string;
  uptime_seconds: number;
  cpu_percent: number;
  memory_percent: number;
};

const API_URL = "/api";

function App() {
  const loading_metrics = {
    status: "Loading...",
    uptime_seconds: 0,
    cpu_percent: 0,
    memory_percent: 0,
  };
  const [metrics, setMetrics] = useState<metrics>(loading_metrics);
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh((prev) => (prev === 0 ? 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/status`);
      const metrics = (await response.json()) as metrics;
      setMetrics(metrics);
    };
    fetchData();
  }, [refresh]);

  const test_data = [10, 30, 20, 15, 35, 25, 10, 20, 20, 25];

  return (
    <>
      <StatusInfo metrics={metrics}></StatusInfo>
      <MetricChart title="Example Metric" data={test_data} />
    </>
  );
}

export default App;
