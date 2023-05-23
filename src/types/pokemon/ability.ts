import { INamedApiResource } from "../api";

export interface IAbility {
  ability: INamedApiResource;
  is_hidden: boolean;
  slot: number;
}
