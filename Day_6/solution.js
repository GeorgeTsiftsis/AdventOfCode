const fs = require("fs")
const input = fs.readFileSync("input.txt", "utf-8")

let marker = [],
    unique = [],
    output = 0

for (let i = 0; i < input.length; i++) {
    marker = [input[i], input[i + 1], input[i + 2], input[i + 3]];
    unique = Array.from(new Set(marker));
    if (marker.length === unique.length) {
        output = i + 4;
        break
    }
}
console.log(`The first solution is ${output}`);