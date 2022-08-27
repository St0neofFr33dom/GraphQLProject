import mongoose from "mongoose";
import Character from "./fe9Schemas.js"

mongoose.connect(
  "mongodb://localhost/fe9",
  () => {
    console.log("Connected to database");
  },
  (e) => console.error(e)
);

