const fs = require("fs")
const input = fs.readFileSync("input.txt", "utf-8")

let marker = [],
    unique = [],
    output = 0,
    output2 = 0;

for (let i = 0; i < input.length; i++) {
    marker = [input[i], input[i + 1], input[i + 2], input[i + 3]];
    unique = Array.from(new Set(marker));
    if (marker.length === unique.length) {
        output = i + 4;
        break
    }
}

console.log(`The first solution is ${output}`);

function part2(amount) {
    for (let i = 0; i < input.length; i++) {
        let aggregator = "" // reset
        for (let j = 0; j < amount; j++) {
            aggregator += input[i + j]
        }
        marker = aggregator.split("") // arrays of 14 letters each

        unique = Array.from(new Set(marker)) //  same approach
        if (marker.length === unique.length) {
            output2 = i + amount
        }
    }
}
part2(14)

console.log(`The second solution is ${output2}`)
