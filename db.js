import mongoose from "mongoose";
import Character from "./fe9Schemas.js"

mongoose.connect(
  "mongodb://localhost/appdb",
  () => {
    console.log("Connected to database");
  },
  (e) => console.error(e)
);

