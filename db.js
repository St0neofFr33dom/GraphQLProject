import mongoose from "mongoose";
import characters from "./data/characters.js"
import skills from "./data/skills.js";
import {Character, Skill} from "./models/fe9Schemas.js"

mongoose.connect(
  "mongodb://localhost/fe9",
  () => {
    console.log("Connected to database");
  },
  (e) => console.error(e)
);


async function populateTable(data, schema){
  for (let i = 0; i < data.length; i++){
    let entry = new schema(data[i])
    await entry.save()
  }
  console.log("Finished")
}
// const unit = new Character(characters[0])

// await unit.save()

populateTable(skills, Skill)