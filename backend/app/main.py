# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from typing import List

# app = FastAPI()

# # Add CORS middleware
# origins = [
#     "http://localhost:3000",  # React frontend
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class Customer(BaseModel):
#     id: int = None  # Make ID optional for creation
#     name: str
#     email: str
#     phone: str

# customers = []
# customer_id = 1

# @app.post("/customers", response_model=Customer)
# async def create_customer(customer: Customer):
#     global customer_id
#     customer.id = customer_id
#     customer_id += 1
#     customers.append(customer)
#     return customer

# @app.get("/customers", response_model=List[Customer])
# async def get_customers():
#     return customers
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Add CORS middleware
origins = [
    "http://localhost:3000",  # React frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Customer(BaseModel):
    id: int = None  # Make ID optional for creation
    name: str
    email: str
    phone: str

customers = []
customer_id = 1

@app.post("/customers", response_model=Customer)
async def create_customer(customer: Customer):
    global customer_id
    customer.id = customer_id
    customer_id += 1
    customers.append(customer)
    return customer

@app.get("/customers", response_model=List[Customer])
async def get_customers():
    return customers