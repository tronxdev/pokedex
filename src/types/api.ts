import { Nullable } from "./utils";

export interface INamedApiResource {
  name: string;
  url: string;
}

export interface INamedApiResourceList {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: Array<INamedApiResource>;
}
