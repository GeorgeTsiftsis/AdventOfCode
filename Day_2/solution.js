const fs = require("fs")
const input = fs.readFileSync("input.txt", { encoding: "utf-8" })
   .replace(/\r/g, "") // remove \r characters
   .trim() //remove white space
   .split("\n")
   .map((line) => line.split(" "))
// recreate sets like [ 'A', 'Z'] ['B', 'Y] etc etc

const moves = {
   rock: 1,
   paper: 2,
   scissors: 3,
}
const generateNumber = {
   A: moves.rock,
   B: moves.paper,
   C: moves.scissors,
   X: moves.rock,
   Y: moves.paper,
   Z: moves.scissors,
}

function score(opponentMove, myMove) {
   if (opponentMove === myMove) {
      return myMove + 3
   }
   // Win cases 
   // 1) rock / paper
   // 2) paper / scissors 
   // 3) scissors / rock
   if ((opponentMove === moves.rock && myMove === moves.paper) ||
      (opponentMove === moves.paper && myMove === moves.scissors) ||
      (opponentMove === moves.scissors && myMove === moves.rock)
   ) {
      return myMove + 6
   }
   // Lost case 
   return myMove
}

function part1() {
   const outcome = input.map((line) => {
      const opponentMove = generateNumber[line[0]];
      const myMove = generateNumber[line[1]];
      return score(opponentMove, myMove)
   });
   const sumOfOutcomes = outcome.reduce((acc, cur) => acc + cur, 0)
   console.log(` 1. Solution is ${sumOfOutcomes}`);
}

const fixedMove = {
   A: { //rock
      X: moves.scissors,  //lose
      Y: moves.rock,  //draw
      Z: moves.paper,  // win
   },
   B: { //paper
      X: moves.rock,
      Y: moves.paper,
      Z: moves.scissors,
   },
   C: { //scissors
      X: moves.paper,
      Y: moves.scissors,
      Z: moves.rock,
   },
}

function part2() {
   const outcome = input.map((line) => {
      const opponentMove = generateNumber[line[0]];

      //Guess my move
      const myMove = fixedMove[line[0]][line[1]]
      return score(opponentMove, myMove)
   });
   const sumOfOutcomes = outcome.reduce((acc, cur) => acc + cur, 0)
   console.log(` 2. Solution is ${sumOfOutcomes}`);
}

part1()
part2()