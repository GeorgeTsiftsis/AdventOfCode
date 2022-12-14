const fs = require("fs");
const inputFile = fs.readFileSync("input.txt", { encoding: "utf-8" });
let sum = 0
inputFile.split(/\r?\n/).forEach(line => {
    const firstHalf = line.slice(0, line.length / 2);
    const secondHalf = line.slice(line.length / 2, line.length);

    for (let i = 0; i < secondHalf.length; i++) {
        if (secondHalf.includes(firstHalf[i])) {
            if (firstHalf[i] == firstHalf[i].toLowerCase()) {
                // Lowercase item types a through z have priorities 1 through 26.
                // Uppercase item types A through Z have priorities 27 through 52.
                // 'a' letter has charCode 97 so every next letter is 'a' charCode +1 for instance 'b'=98 c='99' etc 
                sum = sum + firstHalf[i].charCodeAt(0) - 96

            } else {
                // 'A' letter has charCode 65 so every next letter is 'A' charCode +1 for instance 'B'=66 c='67' etc 
                sum = sum + firstHalf[i].charCodeAt(0) - 38
            }
            break;
        }
    }
});
console.log(` First solution is ${sum}`);
