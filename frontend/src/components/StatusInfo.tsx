import type { metrics } from "../App.tsx";

interface Props {
  metrics: metrics;
}

const StatusInfo = ({ metrics }: Props) => {
  // TODO: Convert uptime seconds to days, hours, minutes, seconds

  return (
    <>
      <h1>Server Status Information</h1>
      <div>
        <div>Status: {metrics.status}</div>
        <div>Uptime: {metrics.uptime_seconds} seconds</div>
        <div>CPU Usage: {metrics.cpu_percent}%</div>
        <div>Memory Usage: {metrics.memory_percent}%</div>
      </div>
    </>
  );
};

export default StatusInfo;
