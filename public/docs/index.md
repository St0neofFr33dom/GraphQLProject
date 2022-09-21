# GraphQL Schema 

<br/>

## Main Query

```bash
    getCharacters(input: CharacterInputs): [Character!]!
    getSkills(input: SkillInputs): [Skill!]!
    getWeapons(input: WeaponInputs): [Weapon!]!
    getStaves(input: StaffInputs): [Staff!]!
    getItems(input: ItemInputs): [Item!]!
    getAccessories(input: AccessoryInputs): [Accessory!]!
    getBeorcClasses(input: BeorcInputs): [Beorc!]!
    getLaguzClasses(input: LaguzInputs): [Laguz!]!
    getAffinities(input: AffinityInputs): [Affinity!]!
```

<br/>

---

<br />

## Main Fields

<br/>

### getCharacters

```bash
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
```

### getBeorcClasses
```bash
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
```
### getLaguzClasses
```bash
    id: ID!
    name: String!
    weapon: Weapon
    maxStats: MaxStats!
    transformationBonuses: TransformationBonuses!
    occultSkill: Skill
```
### getSkills
```bash
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
```
### getWeapons
```bash
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
```
### getStaves
```bash
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
```
### getItems
```bash
    id: ID!
    name: String!
    uses: Int!
    price: Int
    effect: String
```
### getAccessories
```bash
    id: ID!
    name: String!
    price: Int
    effect: String!
    notes: String
```
### getAffinities
```bash
    name: String!
    accuracy: Float
    avoid: Float
    attack: Float
    defense: Float
```
<br/>

---

<br/>

## Unions

<br/>

There are fields that can be queried where the info provided can belong to different Schemas, if you are querying that field, you will need to do a fragment query like so:

```bash
query getCharacters {
*Union Type*{
    # Querying for __typename is almost always recommended,
    # but it's even more important when querying a field that
    # might return one of multiple types.
    __typename
    ... on *Schema 1* {
      *fields*
    }
    ... on *Schema 2*{
      *fields
    }
  }
}
```

<br/>

### Class

```bash
union Class = Beorc | Laguz

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

type Laguz{
    id: ID!
    name: String!
    weapon: Weapon
    maxStats: MaxStats!
    transformationBonuses: TransformationBonuses!
    occultSkill: Skill
}
```

<br/>

### Top

```bash
union Class = Weapon | Staff

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
```

<br/>

### Bottom

```bash
union Class = Item | Accessory

type Item{
    id: ID!
    name: String!
    uses: Int!
    price: Int
    effect: String
}

type Accessory{
    id: ID!
    name: String!
    price: Int
    effect: String!
    notes: String
}
```

<br/>

---

<br/>

## Rest of the fields

```bash

Stats{
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

Growths{
    hitPoints: Int!
    strength: Int!
    magic: Int!
    skill: Int!
    speed: Int!
    luck: Int!
    defense: Int!
    resistance: Int!
}

Rank{
    weapon: String
    rank: String
}

Support{
    name: String
    affinity: String
    chapters: Chapter
}

Chapter{
    C: Int
    B: Int
    A: Int
}

CritSupport{
    name: String
    critBonus: Int
}

MaxStats{
    hitPoints: Int
    strength: Int
    magic: Int
    skill: Int
    speed: Int
    luck: Int
    defense: Int
    resistance: Int
}

PromotionGains{
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

TransformationBonuses{
        strength: Int
        magic: Int
        skill: Int
        speed: Int
        defense: Int
        resistance: Int
        constitution: Int
        movement: Int
}
```

<br/>

---

<br/>

## Filtering Queries and Inputs

<br/>

### Differences to default Apollo GraphQL

<br/>

In GraphQL you can normally filter queries my finding equal matches, but to make use of MongoDb's built in greater and lesser than filtering, to use inputs in this API, they have to finish with an object, with the key being the operation you want to filter by:


```bash
scalar Any: String | Integer | Float | Boolean

FilterOperations{
    eq: Any
    ne: Any
    gt: Float
    gte: Float
    lt: Float
    lte: Float
}

```

```bash
eq = Equal to
ne = Not Equal to
gt: Greater than
gte: Greater than or Equal to
lt: Lesser than
lte: Lesser than or Equal to
```
<br/>

### List of Inputs

<br/>

Currently to filter the API query, you have to chain the inputs at the Main Field level

```bash

CharacterInputs{
    name: FilterOperations
    level: FilterOperations
    baseStats: StatInputs
    growthRates: GrowthInputs
    supportPartners: SupportInputs
}

StatInputs{
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

GrowthInputs{
    hitPoints: FilterOperations
    strength: FilterOperations
    magic: FilterOperations
    skill: FilterOperations
    speed: FilterOperations
    luck: FilterOperations
    defense: FilterOperations
    resistance: FilterOperations
}

SupportInputs{
    name: FilterOperations
    affinity: FilterOperations
}

SkillInputs{
    name: FilterOperations
    capacity: FilterOperations
}

WeaponInputs{
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

StaffInputs{
    name: FilterOperations
    rank: FilterOperations
    weight: FilterOperations
    hitRate: FilterOperations
    uses: FilterOperations
    price: FilterOperations
    weaponExperience: FilterOperations
    experience: FilterOperations
}

ItemInputs{
    name: FilterOperations
    uses: FilterOperations
    price: FilterOperations
}


AccessoryInputs{
    name: FilterOperations
    price: FilterOperations
}

BeorcInputs{
    name: FilterOperations
    weapons: FilterOperations
    skill: FilterOperations
    promoted: FilterOperations
}

LaguzInputs{
    name: FilterOperations
    weapon: WeaponInputs
    maxStats: StatInputs
}

AffinityInputs{
    name: FilterOperations
    accuracy: FilterOperations
    avoid: FilterOperations
    attack: FilterOperations
    defense: FilterOperations
}
```