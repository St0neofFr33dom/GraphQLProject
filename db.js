import mongoose from "mongoose";
import characters from "./data/characters.js"
import skills from "./data/skills.js";
import {swords, lances, axes, bows, tomes, knives, laguzeWeapons} from "./data/weapons.js"
import { staves } from "./data/staves.js";
import { items } from "./data/items.js";
import {affinities} from "./data/affinities.js"
import { accessories }from "./data/accessories.js"
import { beorcClasses, laguzClasses } from "./data/classes.js";
import {Character, Skill, Staff, Weapon, Item, Accessory, Affinity, Beorc, Laguz} from "./models/fe9Schemas.js"


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

async function replaceIDs(){
  const results = await Character.find().populate("Beorcs")
  console.log(results)
}

// await replaceIDs()
// const unit = new Character(characters[0])

// await unit.save()

await populateTable(characters, Character)
await populateTable(skills, Skill)
await populateTable(swords, Weapon)
await populateTable(lances, Weapon)
await populateTable(axes, Weapon)
await populateTable(bows, Weapon)
await populateTable(tomes, Weapon)
await populateTable(knives, Weapon)
await populateTable(laguzeWeapons, Weapon)
await populateTable(staves, Staff)
await populateTable(items, Item)
 await populateTable(accessories, Accessory)
 await populateTable(affinities, Affinity)
 await populateTable(beorcClasses, Beorc)
 await populateTable(laguzClasses, Laguz)
 
