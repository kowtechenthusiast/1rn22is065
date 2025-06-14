const exppress = require("express");
const cors = require("cors");
const app = exppress();
const PORT = 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://your-production-domain.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/evaluation-service/stocks", (req, res) => {
  const stocks = {
    "Apple Inc.": "AAPL",
    "Microsoft Corporation": "MSFT",
    "Alphabet Inc.": "GOOGL",
    "Amazon.com Inc.": "AMZN",
    "Tesla Inc.": "TSLA",
  };

  res.json(stocks);
});
app.get("/api/stocks", (req, res) => {
  res.send("Welcome to the Stock Evaluation Service");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
