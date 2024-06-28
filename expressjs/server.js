const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to SQLite database');

    // Create a new table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating table', err.message);
      } else {
        console.log('Table "customers" initialized');
      }
    });
  }
});

// Route to load initial data into the database
app.get('/api/v1/load', (req, res) => {
  const customers = [
    { name: 'David Capa', email: 'john@example.com' },
    { name: 'Senhor da Noite', email: 'jane@example.com' },
  ];

  try {
    const insertStmt = db.prepare('INSERT INTO customers (name, email) VALUES (?, ?)');
    customers.forEach(customer => {
      insertStmt.run(customer.name, customer.email, (err) => {
        if (err) {
          console.error('Error inserting data', err.message);
          res.status(500).json({message:'Error loading database' });
        }
      });
    });
    insertStmt.finalize();

    res.json({message: 'Database loaded'});
  } catch (error) {
    console.error('Error inserting data', error.message);
    res.status(500).json({message: 'Error loading database'});
  }
});

// Route to query the database and return all customers
app.get('/api/v1/query', (req, res) => {
  try {
    db.all('SELECT * FROM customers', [], (err, rows) => {
      if (err) {
        console.error('Error querying data', err.message);
        res.status(500).json({message: 'Error querying database'});
      } else {
        res.json(rows);
      }
    });
  } catch (error) {
    console.error('Error querying data', error.message);
    res.status(500).json({message: 'Error querying database'});
  }
});

// Route to clear all data from the database
app.get('/api/v1/clear', (req, res) => {
  try {
    db.run('DELETE FROM customers', [], (err) => {
        res.json({ message: 'Database cleared' });
    });
  } catch (error) {
    console.error('Error clearing data', error.message);
    res.status(500).json({ message: 'Error clearing database' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
