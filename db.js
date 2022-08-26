import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost/appdb",
  () => {
    console.log("Connected to database");
  },
  (e) => console.error(e)
);
