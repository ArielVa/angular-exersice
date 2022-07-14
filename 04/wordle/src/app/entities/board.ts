import { Guess } from "./guess";

export interface Board {
    readonly  guesses: Guess[]
    readonly  currentGuess: number
}
