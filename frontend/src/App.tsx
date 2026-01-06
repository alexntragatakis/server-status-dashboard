import { useEffect, useState } from "react";
import "./App.css";
import StatusInfo from "./components/StatusInfo";

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/status`);
      const metrics = (await response.json()) as metrics;
      setMetrics(metrics);
    };
    fetchData();
  }, []);

  return <StatusInfo metrics={metrics}></StatusInfo>;
}

export default App;
