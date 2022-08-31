import { Character, Skill, Weapon, Staff, Item, Accessory, Beorc, Laguz, Affinity } from "./models/fe9Schemas.js";

export const resolvers = {
    Query: {
      characters: async () => await Character.find().populate({path: "affinity"}),
      getSkills: async (_, arg) => await Skill.find(arg.input),
      getWeapons: async (_, arg) => await Weapon.find(arg.input),
      getStaves: async (_, arg) => await Staff.find(arg.input),
      getItems: async (_, arg) => await Item.find(arg.input),
      getAccessories: async (_, arg) => await Accessory.find(arg.input),
      getBeorcClasses: async (_, arg) => await Beorc.find(arg.input).populate({path: "occultSkill"}),
      getLaguzClasses: async (_, arg) => await Laguz.find(arg.input),
      getAffinities: async (_, arg) => await Affinity.find(arg.input),
      },
  };