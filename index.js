const args = process.argv.slice(2);

let mins = 1;
let maxs = 100;

if (args.length > 2) {
    const parsedMins = parseInt(args[0], 10);
    const parsedMaxs = parseInt(args[1], 10);
   
    if (!isNaN(parsedMins) && !isNaN(parsedMaxs) && parsedMins < parsedMaxs) {
        min = parsedMins;
        max = parsedMaxs;
    } else {
        console.log("Invalid arguments. Using default values.");
        console.error("Invalid arguments. Using default values.");
    }
}

const ramdomNumber = Math.floor(Math.random() * (maxs - mins + 1)) + mins;

console.log(`Random number between ${mins} and ${maxs}: ${ramdomNumber}`);