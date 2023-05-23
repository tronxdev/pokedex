import { IBaseType } from "../types/pokemon/type";

export const TYPES: Record<
  IBaseType,
  { bg: string; color: "white" | "black" }
> = {
  normal: {
    bg: "linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%)",
    color: "black",
  },
  fighting: {
    bg: "linear-gradient(180deg, #d56723 50%, #d56723 50%)",
    color: "white",
  },
  flying: {
    bg: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
    color: "black",
  },
  poison: {
    bg: "linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%)",
    color: "white",
  },
  ground: {
    bg: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
    color: "black",
  },
  rock: {
    bg: "linear-gradient(180deg, #a38c21 50%, #a38c21 50%)",
    color: "black",
  },
  bug: {
    bg: "linear-gradient(180deg, #729f3f 50%, #729f3f 50%)",
    color: "white",
  },
  ghost: {
    bg: "linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%)",
    color: "white",
  },
  steel: {
    bg: "linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%)",
    color: "black",
  },
  fire: {
    bg: "linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%)",
    color: "white",
  },
  water: {
    bg: "linear-gradient(180deg, #4592c4 50%, #4592c4 50%)",
    color: "white",
  },
  grass: {
    bg: "linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%)",
    color: "black",
  },
  electric: {
    bg: "linear-gradient(180deg, #eed535 50%, #eed535 50%)",
    color: "black",
  },
  psychic: {
    bg: "linear-gradient(180deg, #f366b9 50%, #f366b9 50%)",
    color: "white",
  },
  ice: {
    bg: "linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%)",
    color: "black",
  },
  dragon: {
    bg: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
    color: "white",
  },
  dark: {
    bg: "linear-gradient(180deg, #707070 50%, #707070 50%)",
    color: "white",
  },
  fairy: {
    bg: "linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%)",
    color: "black",
  },
};
