// deadpan-forecasts — Deadpan Forecasts for Cities That Do Not Exist (make.fun)
// Prints the single original deadpan forecast stored in line.txt and checks
// it fits the bounty's one-line, at-most-140-characters rule.
// Glimmerwick does not exist, which is the only thing its forecast gets right.
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const line = fs.readFileSync(path.join(__dirname, 'line.txt'), 'utf8').trim();
const MAX_CHARS = 140;

if (!line) {
  console.error('line.txt is empty');
  process.exit(1);
}
if (line.includes('\n')) {
  console.error('the entry must be exactly one line');
  process.exit(1);
}
if (line.length > MAX_CHARS) {
  console.error(`line is ${line.length} characters, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

console.log(line);
console.log(`(${line.length} characters, one line, within the ${MAX_CHARS}-character cap)`);
