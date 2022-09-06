import { Character, Skill, Weapon, Staff, Item, Accessory, Beorc, Laguz, Affinity } from "./models/fe9Schemas.js";
import { GraphQLScalarType } from "graphql";


function parseApolloToMongDB(input){
  let entries = []
  let firstFields = Object.keys(input)
  for (let i = 0; i < firstFields.length; i++){
    let nestedObject = input[firstFields[i]]
    let secondFields = Object.keys(nestedObject)
    for (let j = 0; j < secondFields.length; j++){
      let secondObject = nestedObject[secondFields[j]]
      if (typeof(secondObject) !== 'object'){
        let firstKey = `${firstFields[i]}`
        let secondKey = `$${secondFields[j]}`
        let value = nestedObject[secondFields[j]]
        let entry = {[firstKey]:{[secondKey]:value}}
        entries.push(entry)
        continue
      }
      let thirdFields = Object.keys(secondObject)
      for (let k = 0; k < thirdFields.length; k++){
        let firstKey = `${firstFields[i]}.${secondFields[j]}`
        let secondKey = `$${thirdFields[k]}`
        let value = secondObject[thirdFields[k]]
        let entry = {[firstKey]:{[secondKey]:value}}
        entries.push(entry)
      }
        } 
  }
  let fetch  = entries.reduce((first, second) =>{
  let firstKey = Object.keys(first)[0]
  let secondKey = Object.keys(second)[0]
  if (firstKey === secondKey){
    let firstValue = Object.values(first)[0]
    let secondValue = Object.values(second)[0]
    let newValue = Object.assign(firstValue,secondValue)
    let result = {[firstKey]:newValue}
    return result
  }
  let result = Object.assign(first, second)
  return result
} );
return fetch
}

async function fetchData(Schema, input){
  if (input){
    let fetch = parseApolloToMongDB(input)
    let result = await Schema.find(fetch)
    return result
  }
    let result = await Schema.find()
    return result
}

export const resolvers = {
    Any: new GraphQLScalarType({
      name: "Any",
      description: "Literally anything",
      serialize(value) {
        return value;
      },
      parseValue(value) {
        return value;
      },
      parseLiteral(ast) {
        return ast.value;
      }
    }),
    Class:{
      __resolveType(obj) {
        if(obj.race==="Beorc"){
          return 'Beorc'
        }
        if(obj.race==="Laguz"){
          return 'Laguz'
        }
        return null
      }
    },
    Top:{
      __resolveType(obj) {
        if(obj.might){
          return 'Weapon'
        }
        if(obj.experience){
          return 'Staff'
        }
        return null
      }
    },
    Bottom:{
      __resolveType(obj) {
        if(obj.uses){
          return 'Item'
        }
        if(obj.effect){
          return 'Accessory'
        }
        return null
      }
    },
    Query: {
      async getCharacters(_, {input}) {
        return await fetchData(Character, input)
    },
      async getSkills (_, {input}) { 
        return await fetchData(Skill, input)
      },
      async getWeapons (_, {input}) { 
        return await fetchData(Weapon, input)
      },
      async getStaves(_, {input}){
        return await fetchData(Staff, input)
      },
      async getItems (_, {input}) {
        return await fetchData(Item, input)
      },
      async getAccessories (_, {input}) {
        return await fetchData(Accessory, input)
      },
      async getBeorcClasses (_, {input}) {
        return await fetchData(Beorc, input)
      },
      async getLaguzClasses (_, {input}) {
        return await fetchData(Laguz, input)
      },
      async getAffinities (_, {input}) {
        return await fetchData(Affinity, input)
      },
      },
    // Character: {
    //   baseStats(character,{input}){
    //     console.log(input)
    //     return character.baseStats
    //   }
    // }
  };