import { Character, Skill } from "./models/fe9Schemas.js";

export const resolvers = {
    Query: {
      characters: async () => await Character.find(),
      skills: async () => Skill.find()
    },
  };