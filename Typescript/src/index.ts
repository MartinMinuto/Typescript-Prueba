import { string } from "yargs"


let Saludar: string = 'Hello wordl'
let Names: string[] = ['Carlos', 'Felipe','Gaston']

enum Constract {
    permanet,
    temp,
    apprentice
}

const ConstractStatus: Constract = Constract.permanet

console.log(ConstractStatus)

console.log(Saludar + ' ' + Names[2])
console.log(Names)


function SumNumber(num1:number, num2: number): number {
    return(num1 + num2)
}

SumNumber(2,2)

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
 
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
 
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
 }

 let sortDescending = (a:number, b:number) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
 }
 
 let sortAscending = (a:number, b:number) => {
     if (a > b) {
       return 1;
     } else if (b > a) {
       return -1;
     } else {
       return 0;
     }
   }

   let myArray1 = buildArray(12, 'ascending');
    let myArray2 = buildArray(8, 'descending');
    console.log(myArray1);
    console.log(myArray2);