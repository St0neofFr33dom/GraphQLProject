import {gql} from "apollo-server-express";

export const typeDefs = gql`

type Query{
    characters: [Character!]!
    getSkills(input: SkillInputs): [Skill!]!
    getWeapons(input: WeaponInputs): [Weapon!]!
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
    class: String
    level: Int
    baseStats: Stats
    growthRates: Growths
    weaponRanks: [Rank]
    affinity: String
}

type Skill{
    id: ID!
    name: String!
    description: String!
    activationRequirements: String!
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
`