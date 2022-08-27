import { Character } from "./models/fe9Schemas.js";

export const resolvers = {
    Query: {
      characters: () => Character.find(),
    },
  };