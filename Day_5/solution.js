const fs = require("fs")
const input = fs.readFileSync("input.txt", "utf-8")
let output,
    output2;
const lines = input.replace(/\r/g, "")
const [rawStacks, rawMoves] = lines.split("\n\n").map((x) => x.split('\n'));
const parsedStacks = rawStacks.map((line) => 
 [...line].filter((value, index) => index % 4 === 1)); // character that we want is in position 1 for every 4 elements


// The pop() method removes the last element from an array and returns that element
const indexes = parsedStacks.pop()

const stacks = {};

for (const line of parsedStacks) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== " ") {
            if (!stacks[indexes[i]]) {
                stacks[indexes[i]] = [];
            }
            stacks[indexes[i]].unshift(line[i]);
        }
    }
}

const moves = [];
for (const move of rawMoves) {
    const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
    moves.push({
        count: parseInt(match[1]),
        from: parseInt(match[2]),
        to: parseInt(match[3]),
    });
}

function part1() {
    //deep clone
    const firstStacks = JSON.parse(JSON.stringify(stacks));
    for (const move of moves) {
        for (let i = 0; i < move.count; i++) {
            const crate = firstStacks[move.from].pop();
            firstStacks[move.to].push(crate);
        }
    }
    const solution = indexes.map((value) => {
        const stack = firstStacks[value];
        return stack[stack.length - 1];
    })
        .join("");
    output = solution
}

function part2() {
    const localStacks = JSON.parse(JSON.stringify(stacks));
    for (const move of moves) {
      const crates = localStacks[move.from].splice(-move.count, move.count);
      localStacks[move.to] = localStacks[move.to].concat(crates);
    }
    const solution = indexes.map((value) => {
          const stack = localStacks[value];
          return stack[stack.length - 1];
        })
        .join("");
        output2 = solution
  }

part1()
part2()
console.log(` The first solution is ${output}`);
console.log(` The second solution is ${output2}`);