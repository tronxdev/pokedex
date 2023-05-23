import { INamedApiResource } from "../api";
import { IAbility } from "./ability";
import { IMove } from "./move";
import { IType } from "./type";

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Array<IAbility>;
  moves: Array<IMove>;
  species: INamedApiResource;
  types: Array<IType>;
}
