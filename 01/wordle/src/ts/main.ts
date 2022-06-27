import {Game} from "./game";
import {View} from "./view";
import {View2} from "./view2";



const game = new Game();
console.log(game)
// const view = new View(game);
const view2 = new View2(game.addGuess);

// setTimeout(() => console.log(game), 1000)
