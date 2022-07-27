import { Location } from "./location.model";
import { Name } from "./name.profile";
export type Gender = 'male' | 'female';

export interface Profile {
  readonly id: number;
  readonly gender: Gender;
  readonly name: Name;
  readonly location: Location;
}
