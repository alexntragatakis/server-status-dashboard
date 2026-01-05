from fastapi import FastAPI
import psutil
import time

app = FastAPI()

start_time = time.time()

@app.get("/api/status")
def get_status():
    return {
        "status": "ok",
        "uptime_seconds": int(time.time() - start_time),
        "cpu_percent": psutil.cpu_percent(interval=0.1),
        "memory_percent": psutil.virtual_memory().percent,
        }
