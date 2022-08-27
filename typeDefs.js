import {gql} from "apollo-server-express";

export const typeDefs = gql`

type Query{
    characters: [Character!]!
}

type Stats{
    hitPoints: Int
    strength: Int
    magic: Int
    skill: Int
    speed: Int
    luck: Int
    defense: Int
    resistance: Int
    movement: Int
    constitution: Int
    weight: Int
}

type Growths{
    hitPoints: Int
    strength: Int
    magic: Int
    skill: Int
    speed: Int
    luck: Int
    defense: Int
    resistance: Int
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
    baseStats: [Stats]
    growthRates: [Growths]
    weaponRanks: [Rank]
    affinity: String
}



`