/**
1. Windows(ctrl + p), Mac(cmd + p) - search and open file
2. Windows(ctrl + shift + p), Mac(cmd + shift + p) - open command pallete
3. Windows(ctrl + f), Mac(cmd + f) - find in current file
4. Windows(ctrl + shift + f), Mac(cmd + shift + f) - find in project
5. Windows/Mac(f2) - rename identifier (works with html tags too)
6. Windows(alt + shift + (up or down)), Mac(opt + shift + (up or down)) - duplicate current line or current selection up or down
7. Windows(alt + (up or down)), Mac(alt + (up or down)) - move current line or selection up or down
8. Windows(ctrl + d), Mac(ctrl + d)  -  match next occurrence of current selection
9. Windows/Mac(f8) - jump to next error
10.Windows/Mac(f12) - jump to declaration / find usages 
11.Windows(Alt + z), Mac(opt + z)  - word wrap
12.Windows(crtl + `), Mac(cmd + `) - Toggle terminal
13.Windows(ctrl + \), Mac(cmd + \) Mac - split current editor
 */


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function convertToLowerCase(str) {
  return str.toLowerCase();
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function getCurrentDateTime() {
  return new Date().toLocaleString();
}

function logMessage(message) {
  console.log(message);
}

const result = add(5, 3);
logMessage("Result of adding 5 and 3: " + result);
