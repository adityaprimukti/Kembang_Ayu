const express = require("express");
const mysql = require("mysql");
const midtransClient = require("midtrans-client");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5066;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Midtrans Snap instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-NugbB6RBslwW3ETbP97kOH6T", // Ganti dengan server key yang benar
  clientKey: "SB-Mid-client-5Eyx-ub6TuQ4TFn8",
});

app.post("/charge", (req, res) => {
  // Data from client
  const { order_id, gross_amount, customer_details, item_details } = req.body;

  // Validasi input
  if (!order_id || !gross_amount || !customer_details || !item_details) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  let parameter = {
    transaction_details: {
      order_id: order_id,
      gross_amount: gross_amount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: customer_details,
    item_details: item_details,
  };

  snap
    .createTransaction(parameter)
    .then((transaction) => {
      let transactionToken = transaction.token;
      console.log("transactionToken:", transactionToken);
      res.json({ token: transactionToken });
    })
    .catch((error) => {
      console.error("Error creating transaction:", error);
      res.status(500).json({ error: "Failed to create transaction" });
    });
});

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kembangayu",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL connected...");
});

// Delete this route if not needed
// Register route (assuming you have implemented this separately)
app.post("/register", (req, res) => {
  const { username, email, phone, password } = req.body;
  const sql =
    "INSERT INTO tbl_reglog (username, email, phone, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [username, email, phone, password], (err, result) => {
    if (err) {
      console.error("Error during registration:", err);
      res.status(500).send("Server error");
    } else {
      res.send("User registered successfully");
    }
  });
});

// Login route (assuming you have implemented this separately)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM tbl_reglog WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Error during login:", err);
      res.status(500).send("Server error");
    } else if (result.length > 0) {
      const user = result[0];
      // You may want to store the userId in session or some form of state
      res.json({
        message: "Login successful",
        user: {
          userId: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
        },
      });
    } else {
      res.status(401).send("Invalid credentials");
    }
  });
});

app.post("/api/reservations", async (req, res) => {
  const {
    selectedService,
    selectedBranch,
    name,
    phone,
    email,
    selectedDay,
    price,
    userId,
  } = req.body;
  const status = "Pending"; // Default status for new reservation

  const sql =
    "INSERT INTO tbl_reservations (user_id, service, branch, name, phone, email, day, price, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      userId,
      selectedService,
      selectedBranch,
      name,
      phone,
      email,
      selectedDay,
      price,
      status,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting reservation data:", err);
        res.status(500).send("Error inserting reservation");
      } else {
        console.log("Reservation inserted successfully");
        res.json({
          message: "Reservation created successfully",
          reservationId: result.insertId,
        });
      }
    }
  );
});

// Get all reservations route
app.get("/api/reservations", (req, res) => {
  const sql = "SELECT * FROM tbl_reservations";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving reservations:", err); // Log the specific error
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// Delete reservation route
app.delete("/api/reservations/:id", (req, res) => {
  const reservationId = req.params.id;

  const sql = "DELETE FROM tbl_reservations WHERE id = ?";
  db.query(sql, [reservationId], (err, result) => {
    if (err) {
      console.error("Error deleting reservation:", err);
      res.status(500).send("Error deleting reservation");
    } else {
      console.log("Reservation deleted successfully");
      res.json({ message: "Reservation deleted successfully" });
    }
  });
});

// Confirm reservation route
app.put("/api/reservations/:id/confirm", (req, res) => {
  const reservationId = req.params.id;

  const sql = "UPDATE tbl_reservations SET status = ? WHERE id = ?";
  db.query(sql, ["Confirmed", reservationId], (err, result) => {
    if (err) {
      console.error("Error confirming reservation:", err);
      res.status(500).send("Error confirming reservation");
    } else {
      console.log("Reservation confirmed successfully");
      res.json({ message: "Reservation confirmed successfully" });
    }
  });
});

// POST an assessment
app.post("/api/assessments", (req, res) => {
  const { name, assessment, day } = req.body;
  const sql =
    "INSERT INTO tbl_assessments (name, assessment, day) VALUES (?, ?, ?)";
  db.query(sql, [name, assessment, day], (err, result) => {
    if (err) {
      console.error("Error inserting assessment:", err);
      res.status(500).send("Error inserting assessment");
    } else {
      console.log("Assessment inserted successfully");
      res.json({
        message: "Assessment created successfully",
        assessmentId: result.insertId,
      });
    }
  });
});

// GET all assessments
app.get("/api/assessments", (req, res) => {
  const sql = "SELECT * FROM tbl_assessments";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving assessments:", err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// DELETE an assessment by ID
app.delete("/api/assessments/:id", (req, res) => {
  const assessmentId = req.params.id;

  const sql = "DELETE FROM tbl_assessments WHERE id = ?";
  db.query(sql, [assessmentId], (err, result) => {
    if (err) {
      console.error("Error deleting assessment:", err);
      res.status(500).send("Error deleting assessment");
    } else {
      console.log("Assessment deleted successfully");
      res.json({ message: "Assessment deleted successfully" });
    }
  });
});

app.post("/api/contacts", (req, res) => {
  const { name, telepon, email, subject, message, branch } = req.body;

  const sql =
    "INSERT INTO tbl_contacts (name, telepon, email, subject, message, branch) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [name, telepon, email, subject, message, branch],
    (err, result) => {
      if (err) {
        console.error("Error inserting contact form data:", err);
        res.status(500).send("Error inserting contact form data");
      } else {
        console.log("Contact form data inserted successfully");
        res.json({ message: "Contact form submitted successfully" });
      }
    }
  );
});

app.get("/api/contacts", (req, res) => {
  const sql = "SELECT * FROM tbl_contacts";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching contacts:", err);
      res.status(500).send("Error fetching contacts");
    } else {
      res.json(results);
    }
  });
});

// DELETE Contact Endpoint
app.delete("/api/contacts/:id", (req, res) => {
  const contactId = req.params.id;

  const sql = "DELETE FROM tbl_contacts WHERE id = ?";
  db.query(sql, [contactId], (err, result) => {
    if (err) {
      console.error("Error deleting contact:", err);
      res.status(500).send("Error deleting contact");
    } else {
      console.log("Contact deleted successfully");
      res.json({ message: "Contact deleted successfully" });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
