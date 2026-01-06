from fastapi import FastAPI
import psutil
import time

app = FastAPI()

start_time = time.time()

@app.get("/api/status")
def get_status():
    cpu_percent = psutil.cpu_percent(interval=1)
    memory_percent = psutil.virtual_memory().percent

    if (cpu_percent > 90) or (memory_percent > 90):
        status = "critical"
    elif (cpu_percent > 70) or (memory_percent > 75):
        status = "warning"
    else:
        status = "ok"

    return {
        "status": status,
        "uptime_seconds": int(time.time() - start_time),
        "cpu_percent": cpu_percent,
        "memory_percent": memory_percent
        }
