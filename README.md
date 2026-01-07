# Server Status Dashboard
This is a full-stack web application designed to monitor the status of a home server. It uses a FastAPI backend to gather system metrics and a modular, type-safe React frontend to visualize the data. The application is deployed locally for personal use.

### Features
- Periodic frontend polling which fetches and updates system metrics at one-second intervals
- System data interpretation to summarize home server status as "ok", "warning", or "critical"
### Future intentions
- Graphical visualization of historical metric data

### Tech Stack
- Frontend: React, TypeScript, Vite
- Backend: Python, FastAPI
