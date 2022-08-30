import mongoose from "mongoose";




const characterSchema = new mongoose.Schema({
    name: String,
//     class: {type: mongoose.Schema.Types.ObjectId, ref: "Beorc"} || {type: mongoose.Schema.Types.ObjectId, ref: "Laguz"},
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
//     skills: [{type: mongoose.Schema.Types.ObjectId, ref: "Skill"}],
//     topInventory: [{type: mongoose.Schema.Types.ObjectId, ref: "Weapon"} || {type: mongoose.Schema.Types.ObjectId, ref: "Staff"}],
//     bottomInventory: [{type: mongoose.Schema.Types.ObjectId, ref: "Item"} || {type: mongoose.Schema.Types.ObjectId, ref: "Accessory"}],
//     affinity: {type: mongoose.Schema.Types.ObjectId, ref: "Affinity"},
//     supportPartners: [{type: mongoose.Schema.Types.ObjectId, ref: "Character"}]
    skills: [String],
    topInventory: [String],
    bottomInventory: [String],
    affinity: String,
    supportPartners: [String]
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

const accessoriesSchema = new mongoose.Schema({
        name: String,
        price: Number,
        effect: String,
        notes: String
})

const laguzSchema = new mongoose.Schema({
        name: String,
        maxStats: {
            hitPoints: Number,
            strength: Number,
            magic: Number,
            skill: Number,
            speed: Number,
            luck: Number,
            defense: Number,
            resistance: Number,
        },
        transformationBonuses: {
            strength: Number,
            magic: Number,
            skill: Number,
            speed: Number,
            defense: Number,
            resistance: Number,
            constitution: Number,
            movement: Number,
        },
        occultSkill: String
})

const beorcSchema = new  mongoose.Schema({
        name: String,
        weapons: [String],
        maxStats: {
            hitPoints: Number,
            strength: Number,
            magic: Number,
            skill: Number,
            speed: Number,
            luck: Number,
            defense: Number,
            resistance: Number,
        },
        skill: [String],    
        promoted: Boolean,
        promotesInto: String,
        promotionGains: {
            hitPoints: Number,
            strength: Number,
            magic: Number,
            skill: Number,
            speed: Number,
            defense: Number,
            resistance: Number,
            constitution: Number,
            movement: Number,
            capacity: Number,
        },
        occultSkill: String,
        notes: String
})

const affinitySchema = new mongoose.Schema({
        name: String,
        accuracy: Number,
        avoid: Number,
        attack: Number,
        defense: Number 
})

const Character = mongoose.model("Character", characterSchema)
const Skill = mongoose.model("Skill", skillsSchema)
const Weapon = mongoose.model("Weapon", weaponsSchema)
const Staff = mongoose.model("Staff", stavesSchema)
const Item = mongoose.model("Item", itemsSchema)
const Accessory = mongoose.model("Accessory", accessoriesSchema)
const Beorc = mongoose.model("Beorc", beorcSchema)
const Laguz = mongoose.model("Laguz", laguzSchema)
const Affinity = mongoose.model("Affinity", affinitySchema) 

export {Character, Skill, Weapon, Item, Staff, Beorc, Laguz, Accessory, Affinity}