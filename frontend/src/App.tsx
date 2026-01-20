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
  const [last60CPU, setLast60CPU] = useState<number[]>([]);
  const [last60Memory, setLast60Memory] = useState<number[]>([]);

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
      setLast60CPU((prev) => [...prev, metrics.cpu_percent].slice(-60));
      setLast60Memory((prev) => [...prev, metrics.memory_percent].slice(-60));
    };
    fetchData();
  }, [refresh]);

  return (
    <>
      <StatusInfo metrics={metrics}></StatusInfo>
      <MetricChart title="CPU Usage Percent" data={last60CPU} />
      <MetricChart title="Memory Usage Percent" data={last60Memory} />
    </>
  );
}

export default App;
