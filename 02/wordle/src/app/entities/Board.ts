import { Injectable } from "@angular/core";
import { Guess } from "./Guess";



export interface Board {
    guesses: Guess[]
    currentGuess: number
}