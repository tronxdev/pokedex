import { INamedApiResource } from "../api";

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: INamedApiResource;
  version_group: INamedApiResource;
}

export interface IMove {
  move: INamedApiResource;
  version_group_details: Array<IVersionGroupDetail>;
}
