const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const scoreRoutes = require("./routes/scoreRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// --- Routes ---
app.use("/api/scores", scoreRoutes);

// --- MongoDB Connection ---
mongoose.connect(
  "mongodb+srv://Murtaza2024db:hetar1975@cluster0.coyv8yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// --- Server Run ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
