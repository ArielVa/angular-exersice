import { Street } from "./street.model";

export interface Location {
    readonly street: Street;
    readonly city: string;
    readonly state: string;
    readonly country: string;
    readonly postcode: number;
}