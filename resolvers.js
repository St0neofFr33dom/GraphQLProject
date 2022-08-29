import { Character, Skill, Weapon } from "./models/fe9Schemas.js";

export const resolvers = {
    Query: {
      characters: async () => await Character.find(),
      getSkills: async (_, arg) => Skill.find(arg.input),
      getWeapons: async (_, arg) => Weapon.find(arg.input),
    },
  };