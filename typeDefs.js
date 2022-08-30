import {gql} from "apollo-server-express";

export const typeDefs = gql`

type Query{
    characters: [Character!]!
    getSkills(input: SkillInputs): [Skill!]!
    getWeapons(input: WeaponInputs): [Weapon!]!
    getStaves(input: StaffInputs): [Staff!]!
    getItems(input: ItemInputs): [Item!]!
    getAccessories(input: AccessoryInputs): [Accessory!]!
    getBeorcClasses(input: BeorcInputs): [Beorc!]!
    getLaguzClasses(input: LaguzInputs): [Laguz!]!
    getAffinities(input: AffinityInputs): [Affinity!]!
}

type Stats{
    hitPoints: Int!
    strength: Int!
    magic: Int!
    skill: Int!
    speed: Int!
    luck: Int!
    defense: Int!
    resistance: Int!
    movement: Int!
    constitution: Int
    weight: Int
}

type Growths{
    hitPoints: Int!
    strength: Int!
    magic: Int!
    skill: Int!
    speed: Int!
    luck: Int!
    defense: Int!
    resistance: Int!
}

type Rank{
    weapon: String
    rank: String
}

type Character{
    id: ID!
    name: String!
    class: String!
    level: Int!
    baseStats: Stats!
    growthRates: Growths!
    weaponRanks: [Rank]!
    skills: [String]
    affinity: String!
    supportPartners: [String]
}

type Skill{
    id: ID!
    name: String!
    description: String!
    activationRequirements: String
    capacity: Int!
}

input SkillInputs{
    id: ID
    name: String
    capacity: Int
}

type Weapon{
    id: ID!
    name: String!
    type: String!
    rank: String!
    might: Int!
    hitRate: Int!
    criticalRate: Int!
    weight: Int!
    range: String!
    uses: Int
    price: Int
    weaponExperience: Int
    notes: String
}

input WeaponInputs{
    id: ID
    name: String
    type: String
    rank: String
    might: Int
    hitRate: Int
    criticalRate: Int
    weight: Int
    range: String
    uses: Int
    price: Int
}

type Staff{
    id: ID!
    name: String!
    rank: String!
    weight: Int
    hitRate: Int
    range: String!
    uses: Int!
    price: Int
    weaponExperience: Int!
    experience: Int!
    effect: String!
    notes: String
}

input StaffInputs{
    id: ID
    name: String
    rank: String
    weight: Int
    hitRate: Int
    uses: Int
    price: Int
    weaponExperience: Int
    experience: Int
}

type Item{
    id: ID!
    name: String!
    uses: Int!
    price: Int
    effect: String
}

input ItemInputs{
    id: ID
    name: String
    uses: Int
    price: Int
}

type Accessory{
    id: ID!
    name: String!
    price: Int
    effect: String!
    notes: String
}

input AccessoryInputs{
    id: ID
    name: String
    price: Int
}

type MaxStats{
    hitPoints: Int
    strength: Int
    magic: Int
    skill: Int
    speed: Int
    luck: Int
    defense: Int
    resistance: Int
}

type PromotionGains{
    hitPoints: Int
    strength: Int
    magic: Int
    skill: Int
    speed: Int
    defense: Int
    resistance: Int
    constitution: Int
    movement: Int
    capacity: Int
}

type Beorc{
    id: ID!
    name: String!
    weapons: [String]
    maxStats: MaxStats!
    skill: [String],   
    promoted: Boolean!
    promotesInto: String
    promotionGains: PromotionGains
    occultSkill: String
    notes: String
}

input BeorcInputs{
    id: ID
    name: String
    weapons: String
    skill: String
    promoted: Boolean
    promotesInto: String
    occultSkill: String
}

type TransformationBonuses{
        strength: Int
        magic: Int
        skill: Int
        speed: Int
        defense: Int
        resistance: Int
        constitution: Int
        movement: Int
    }


type Laguz{
    id: ID!
    name: String!
    maxStats: MaxStats!
    transformationBonuses: TransformationBonuses!
    occultSkill: String!
}

input LaguzInputs{
    id: ID
    name: String
    occultSkill: String
}

type Affinity{
    name: String!
    accuracy: Float
    avoid: Float
    attack: Float
    defense: Float
}

input AffinityInputs{
    name: String
    accuracy: Float
    avoid: Float
    attack: Float
    defense: Float
}

`