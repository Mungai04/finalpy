import sqlite3

DATABASE_URL = "test.db"

def get_db():
    conn = sqlite3.connect(DATABASE_URL)
    return conn

def create_tables():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL
    )
    """)
    conn.commit()
    conn.close()

create_tables()