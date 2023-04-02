"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Saludar = 'Hello wordl';
let Names = ['Carlos', 'Felipe', 'Gaston'];
var Constract;
(function (Constract) {
    Constract[Constract["permanet"] = 0] = "permanet";
    Constract[Constract["temp"] = 1] = "temp";
    Constract[Constract["apprentice"] = 2] = "apprentice";
})(Constract || (Constract = {}));
const ConstractStatus = Constract.permanet;
console.log(ConstractStatus);
console.log(Saludar + ' ' + Names[2]);
console.log(Names);
function SumNumber(num1, num2) {
    return (num1 + num2);
}
SumNumber(2, 2);
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
//# sourceMappingURL=index.js.map