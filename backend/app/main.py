from fastapi import FastAPI

app = FastAPI(title="Electrician Platform API")


@app.get("/")
def root():
    return {
        "message": "Electrician Platform API is running"
    }