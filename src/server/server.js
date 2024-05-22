//server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kembangayu',
});

// Connect to MySQL
db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Register route
app.post('/register', (req, res) => {
  const { username, email, phone, password } = req.body;
  const sql = 'INSERT INTO tbl_reglog (username, email, phone, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, email, phone, password], (err, result) => {
    if (err) {
      console.error('Error during registration:', err);  // Log the specific error
      res.status(500).send('Server error');
    } else {
      res.send('User registered successfully');
    }
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM tbl_reglog WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error during login:', err);  // Log the specific error
      res.status(500).send('Server error');
    } else if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
