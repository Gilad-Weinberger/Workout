require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const cors = require("cors");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(import.meta.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(import.meta.env.PORT, () => {
      console.log("listening for requests on port", import.meta.env.PORT);
    });
  })
  .catch((err) => {
    console.log(import.meta.env.MONGO_URI);
    console.log(err);
  });
