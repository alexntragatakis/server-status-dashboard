import "./App.css";

export type metrics = {
  status: string;
  uptime_seconds: number;
  cpu_percent: number;
  memory_percent: number;
};

function App() {
  const test_metrics = {
    // TODO: Make logic to get actual metrics
    status: "ok",
    uptime_seconds: 60,
    cpu_percent: 50,
    memory_percent: 50,
  };
  return <></>;
}

export default App;
