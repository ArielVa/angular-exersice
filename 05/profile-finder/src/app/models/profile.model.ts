import { Name } from "./name.profile";

export type Gender = 'male' | 'female';

export interface Profile {
    readonly gender: Gender;
    readonly name: Name;
    readonly location: Location;
}