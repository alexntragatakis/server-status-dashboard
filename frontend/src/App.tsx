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
  const test_metrics = {
    // TODO: Make logic to get actual metrics
    status: "ok",
    uptime_seconds: 60,
    cpu_percent: 50,
    memory_percent: 50,
  };
  const [metrics, setMetrics] = useState<metrics>(test_metrics);

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
