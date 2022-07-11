import { Injectable } from "@angular/core";
import { Guess } from "./Guess";



export interface Board {
    readonly  guesses: Guess[]
    readonly  currentGuess: number
}
