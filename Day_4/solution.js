const input = require("fs").readFileSync("input.txt", "utf-8").split("\n");
let fullOverlaps = 0;
let partOverlaps = 0;

for (let i = 0; i < input.length; i++) {

	/* Regex explained : /  /g  global search 
						\d groups multiple tokens together and creates capture gorup for extracting a substring
						 + Match 1 or more of thepreceding token */
	// View more at https://regexr.com/ 

	let pairs = input[i].match(/(\d+)/g);
	pairs = pairs.map((n) => parseInt(n));

	let r1 = [pairs[0], pairs[1]];
	let r2 = [pairs[2], pairs[3]];
	let maxNumber = (a) => Math.max(a);
	let minNumber = (a) => Math.min(a);

	if ((pairs[0] <= pairs[2] && pairs[1] >= pairs[3]) || (pairs[0] >= pairs[2] && pairs[1] <= pairs[3]))
		fullOverlaps++;
	else if (r1.some((n) => r2.includes(n))) partOverlaps++;
	else if (
		(maxNumber(r1) >= minNumber(r2) && maxNumber(r1) <= maxNumber(r2)) ||
		(maxNumber(r2) >= minNumber(r1) && maxNumber(r2) <= maxNumber(r1))
	)
		partOverlaps++;
}

console.log(`The first solution is ${fullOverlaps}`);
console.log(`The second solution is ${partOverlaps + fullOverlaps}`);