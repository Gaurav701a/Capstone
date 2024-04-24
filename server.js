const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Add this line to enable CORS

// Routes
app.use("/auth", authRoutes);

// serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://gaurav30sahu:Q4f85a90EPd8v6zU@cluster0.kydzzr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    const PORT = process.env.PORT || 4242;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
