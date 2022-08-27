import { Character } from "./models/fe9Schemas.js";

export const resolvers = {
    Query: {
      characters: async () => await Character.find(),
    },
  };