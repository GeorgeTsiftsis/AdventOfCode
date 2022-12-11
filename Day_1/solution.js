const fs = require("fs")
const inputFile = fs.readFileSync("input.txt", "utf-8")
let largest = 0
let current = 0
let allElfs = []
inputFile.split(/\r?\n/).forEach(line => {
  if (line == "") {
    if (current > largest) {
      largest = current
    }
    current = 0
  } 
 current = current + Number(line)
 allElfs.push(current)
 
})
// You could remove  all the 0 with filter method  (as is falsy value) to reduce the checks over the array
// removeFalsyValues = allElfs.filter(x=> x)

const findLargest3 = (arr, arr_size) => {
    let first, second, third;
    third = first = second = 0

    for(let i = 0; i < arr_size; i++)
    {
         
        // If current element is
        // greater than first
        if (arr[i] > first)
        {
            third = second;
            second = first;
            first = arr[i];
        }
 
        // If arr[i] is in between first
        // and second then update second
        else if (arr[i] > second)
        {
            third = second;
            second = arr[i];
        }
 
        else if (arr[i] > third)
            third = arr[i];
    }
 
    totalCaloriesOfTop3 = first + second +third;
    return totalCaloriesOfTop3
}

const totalCalories = findLargest3(allElfs, allElfs.length);

console.log(`Answer for first question ${largest} `)
console.log(`Answer for second question ${totalCalories} `)


// 2nd solution but slower in performance
// const findLargest3 = (array) => {
//     array.sort((a,b) => a < b ? 1 : a > b ? -1 :0)
//     const findLargest = array.slice(0,3)
//     const totalCalories = findLargest.reduce((a,b) => a + b, 0 )
//     console.log(totalCalories)

// }
// findLargest3(allElfs)

