const input = require("fs").readFileSync("input.txt", "utf-8").split("\n");
let fullOverlaps = 0

for (let i = 0; i < input.length; i++) {

	/* Regex explained : /  /g  global search 
						\d groups multiple tokens together and creates capture gorup for extracting a substring
						 + Match 1 or more of thepreceding token */
	// View more at https://regexr.com/ 

	let pairs = input[i].match(/(\d+)/g);
	pairs = pairs.map((n) => parseInt(n));
	if ((pairs[0] <= pairs[2] && pairs[1] >= pairs[3]) ||
		(pairs[0] >= pairs[2] && pairs[1] <= pairs[3])
	)
		fullOverlaps++;

}

console.log(`The first solution is ${fullOverlaps}`);