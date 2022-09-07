import {gql} from "apollo-server-express";

export const typeDefs = gql`

type Query{
    getCharacters(input: CharacterInputs): [Character!]!
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

input StatInputs{
    hitPoints: FilterOperations
    strength: FilterOperations
    magic: FilterOperations
    skill: FilterOperations
    speed: FilterOperations
    luck: FilterOperations
    defense: FilterOperations
    resistance: FilterOperations
    movement: FilterOperations
    constitution: FilterOperations
    weight: FilterOperations
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

input GrowthInputs{
    hitPoints: FilterOperations
    strength: FilterOperations
    magic: FilterOperations
    skill: FilterOperations
    speed: FilterOperations
    luck: FilterOperations
    defense: FilterOperations
    resistance: FilterOperations
}

type Rank{
    weapon: String
    rank: String
}

type Character{
    id: ID!
    name: String!
    class: Class!
    level: Int!
    baseStats: Stats
    growthRates: Growths!
    weaponRanks: [Rank]!
    skills: [Skill]!
    equipment: [Top]!
    items: [Bottom]!
    affinity: Affinity!
    supportPartners: [Support]!
    critBonusPartners: [CritSupport]!
    critNegation: [String]!
    apolloSkill: [Skill]!
}


input CharacterInputs{
    # id: ID
    name: FilterOperations
    level: FilterOperations
    baseStats: StatInputs
    growthRates: GrowthInputs
    supportPartners: SupportInputs
    skills: SkillInputs
}


scalar Any

input FilterOperations{
    eq: Any
    ne: Any
    gt: Int
    gte: Int
    lt: Int
    lte: Int
}


type Support{
    name: String
    affinity: String
    chapters: Chapter
}

input SupportInputs{
    name: FilterOperations
    affinity: FilterOperations
}

type Chapter{
    C: Int
    B: Int
    A: Int
}

type CritSupport{
    name: String
    critBonus: Int
}

type Skill{
    id: ID!
    name: String
    description: String!
    activationRequirements: String
    capacity: Int!
}

input SkillInputs{
    # id: ID
    name: FilterOperations
    capacity: FilterOperations
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
    # id: ID
    name: FilterOperations
    type: FilterOperations
    rank: FilterOperations
    might: FilterOperations
    hitRate: FilterOperations
    criticalRate: FilterOperations
    weight: FilterOperations
    range: FilterOperations
    uses: FilterOperations
    price: FilterOperations
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
    # id: ID
    name: FilterOperations
    rank: FilterOperations
    weight: FilterOperations
    hitRate: FilterOperations
    uses: FilterOperations
    price: FilterOperations
    weaponExperience: FilterOperations
    experience: FilterOperations
}

union Top = Weapon | Staff


type Item{
    id: ID!
    name: String!
    uses: Int!
    price: Int
    effect: String
}

input ItemInputs{
    # id: ID
    name: FilterOperations
    uses: FilterOperations
    price: FilterOperations
}

type Accessory{
    id: ID!
    name: String!
    price: Int
    effect: String!
    notes: String
}

input AccessoryInputs{
    # id: ID
    name: FilterOperations
    price: FilterOperations
}

union Bottom = Item | Accessory

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
    skill: [String]   
    promoted: Boolean!
    promotesInto: String
    promotionGains: PromotionGains
    occultSkill: Skill
    notes: String
}

input BeorcInputs{
    # id: ID
    name: FilterOperations
    weapons: FilterOperations
    skill: FilterOperations
    promoted: FilterOperations
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
    weapon: Weapon
    maxStats: MaxStats!
    transformationBonuses: TransformationBonuses!
    occultSkill: Skill
    
}

input LaguzInputs{
    # id: ID
    name: FilterOperations
    weapon: WeaponInputs
    maxStats: StatInputs
}

union Class = Beorc | Laguz

    


type Affinity{
    name: String!
    accuracy: Float
    avoid: Float
    attack: Float
    defense: Float
}

input AffinityInputs{
    name: FilterOperations
    accuracy: FilterOperations
    avoid: FilterOperations
    attack: FilterOperations
    defense: FilterOperations
}

`
