import mongoose from "mongoose";




const characterSchema = new mongoose.Schema({
    name: String,
    class: String,
    level: Number,
    baseStats: {
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
},
    growthRates: {
        hitPoints: Number,
        strength: Number,
        magic: Number,
        skill: Number,
        speed: Number,
        luck: Number,
        defense: Number,
        resistance: Number,
},
    weaponRanks: [{weapon: String, rank: String}],
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
        price: Number,
        weaponExperience: Number,
        experience: Number,
        notes: String
})

const itemsSchema = new mongoose.Schema({
        name: String,
        uses: Number,
        price: Number,
        effect: String
})

const skillsSchema = new mongoose.Schema({
        name: String,
        description: String,
        activationRequirements: String,
        capacity: Number,
})

const stavesSchema = new mongoose.Schema({
        name: String,
        rank: String,
        weight: Number,
        hitRate: Number,
        range: String,
        uses: Number,
        price: Number,
        weaponExperience: Number,
        experience: Number,
        effect: String,
        notes: String
})

const Character = mongoose.model("Character", characterSchema)
const Skill = mongoose.model("Skill", skillsSchema)
const Weapon = mongoose.model("Weapon", weaponsSchema)
const Item = mongoose.model("Item", itemsSchema)
const Staff = mongoose.model("Staff", stavesSchema)

export {Character, Skill, Weapon, Item, Staff}