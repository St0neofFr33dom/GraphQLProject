import { Character, Skill, Weapon, Staff, Item } from "./models/fe9Schemas.js";

export const resolvers = {
    Query: {
      characters: async () => await Character.find(),
      getSkills: async (_, arg) => await Skill.find(arg.input),
      getWeapons: async (_, arg) => await Weapon.find(arg.input),
      getStaves: async (_, arg) => await Staff.find(arg.input),
      getItems: async (_, arg) => await Item.find(arg.input),
    },
  };