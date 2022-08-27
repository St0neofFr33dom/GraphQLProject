import mongoose from "mongoose";
import characters from "./data/characters.js"
import {Character} from "./models/fe9Schemas.js"

mongoose.connect(
  "mongodb://localhost/fe9",
  () => {
    console.log("Connected to database");
  },
  (e) => console.error(e)
);

const unit = new Character(characters[0])

await unit.save()