let names = ["Kai", "Patrick", "Mickey"];
let nameLengths = [];

// Loop for names array, and add lengths to nameLengths array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log("nameLengths array:", nameLengths);
//Console.log will print name length 3,7,6

let sum = 0;

// Loop for the sum of all elements in my nameLengths array
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log("Sum of name lengths:", sum); 
// will print 16 (since 3 + 7 + 6 = 16)

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName('Kai', 'Daca'));  // Output: 'Kai Daca'
console.log(getFullName('Pat', 'Daca'));  // Output: 'Pat Daca'


