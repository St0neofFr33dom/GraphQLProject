import mongoose from "mongoose";
import characters from "./data/characters.js"
import skills from "./data/skills.js";
import {swords, lances, axes, bows, tomes, knives, laguzeWeapons} from "./data/weapons.js"
import { staves } from "./data/staves.js";
import { items } from "./data/items.js";
import {Character, Skill, Staff, Weapon, Item} from "./models/fe9Schemas.js"


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


// await populateTable(skills, Skill)
// await populateTable(swords, Weapon)
// await populateTable(lances, Weapon)
// await populateTable(axes, Weapon)
// await populateTable(bows, Weapon)
// await populateTable(tomes, Weapon)
// await populateTable(knives, Weapon)
// await populateTable(laguzeWeapons, Weapon)
// await populateTable(staves, Staff)
await populateTable(items, Item)