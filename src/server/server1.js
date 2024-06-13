const express = require("express");
const midtransClient = require("midtrans-client");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize Midtrans Snap instance
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-NugbB6RBslwW3ETbP97kOH6T", // Ganti dengan server key yang benar
  clientKey: "SB-Mid-client-5Eyx-ub6TuQ4TFn8",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Endpoint to create transaction token
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
