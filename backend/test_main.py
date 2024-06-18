from fastapi.testclient import TestClient
from .app.main import app

client = TestClient(app)

def test_create_customer():
    response = client.post("/customers/", json={"name": "John Doe", "email": "john@example.com", "phone": "1234567890"})
    assert response.status_code == 200
    assert response.json()["name"] == "John Doe"

def test_read_customers():
    response = client.get("/customers/")
    assert response.status_code == 200
    assert len(response.json()) > 0