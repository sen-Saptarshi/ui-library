const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:HQ28Gv9dpZcxzEDW@cluster0.ogsmtpp.mongodb.net/UIlibraryDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/components", require("./routes/componentRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
