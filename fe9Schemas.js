import mongoose from "mongoose";


const statsSchema = new mongoose.Schema({
        hitPoints: Number,
        strength: Number,
        magic: Number,
        skill: Number,
        speed: Number,
        luck: Number,
        defense: Number,
        resistance: Number,
        movement: Number,
        constitution: Number,
        weight: Number,
})

const growthsSchema = new mongoose.Schema({
        hitPoints: Number,
        strength: Number,
        magic: Number,
        skill: Number,
        speed: Number,
        luck: Number,
        defense: Number,
        resistance: Number,
})


const characterSchema = new mongoose.Schema({
    name: String,
    class: String,
    level: Number,
    baseStats: statsSchema,
    growthRates: growthsSchema,
    weaponRanks: [{name: String, rank: String}],
    skills: [{type: mongoose.SchemaTypes.ObjectId, ref: "Skill"}],
    affinity: String,
})

const weaponsSchema = new mongoose.Schema({
        name: String,
        type: String,
        rank: String,
        might: Number,
        hitRate: Number,
        criticalRate: Number,
        weight: Number,
        range: String,
        uses: Number,
        worth: Number,
        weaponExperience: Number,
        experience: Number,
        notes: String
})

const itemsSchema = new mongoose.Schema({
        name: String,
        uses: Number,
        worth: Number,
        notes: String
})

const skillsSchema = new mongoose.Schema({
        name: String,
        description: String,
        activationRequirements: String,
        capacity: Number,
})



const character = mongoose.model("Character", characterSchema)
const skill = mongoose.model("Skill", skillsSchema)
const weapon = mongoose.model("Weapon", weaponsSchema)
const items = mongoose.model("Item", itemsSchema)

export {character, skill, weapon, items}