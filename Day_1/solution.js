const fs = require("fs")
const inputFile = fs.readFileSync("input.txt", "utf-8")
let largest = 0
let current = 0
inputFile.split(/\r?\n/).forEach(line => {
  if (line == "") {
    if (current > largest) {
      largest = current
    }
    current = 0
  } 
    current = current + Number(line)
  
})
console.log("Answer:", largest)