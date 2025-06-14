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

app.get("/api/stocks", async (req, res) => {
  const stocks = [
    "Advanced Micro Devices, Inc.",
    "Alphabet Inc. Class A",
    "Alphabet Inc. Class C",
    "Amazon.com, Inc.",
    "Amgen Inc.",
    "Apple Inc.",
    "Berkshire Hathaway Inc.",
    "Booking Holdings Inc.",
    "Broadcom Inc.",
    "CSX Corporation",
    "Eli Lilly and Company",
    "Marriott International, Inc.",
    "Marvell Technology, Inc.",
    "Meta Platforms, Inc.",
    "Microsoft Corporation",
    "Nvidia Corporation",
    "PayPal Holdings, Inc.",
    "TSMC",
    "Tesla, Inc.",
    "Visa Inc.",
  ];
  res.json(stocks);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
