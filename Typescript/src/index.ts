import { NumericLiteral } from "@babel/types"
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

    type Audit = {
        create_at: string,
        modified_at: string
    }

    type product = {
        name: string
    }

    const Product: Audit & product = {
        create_at: '',
        modified_at: '',
        name: ''
    }

    function toNumber(s: string) {
      return parseInt(s)
    }

    console.log(toNumber)

    const dificulty: number | null = 0

    const user2 = {
      username: 'Martin',
      dificulty: dificulty ?? 1,
    }

    console.log(user2)

    class Personaje {
      constructor( id: number,name: string, nivel: number, hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this.hp = hp
      }
        id: number
        name: string
        nivel: number
        hp: number

      SubirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
      }
    }
    const personaje = new Personaje(1, 'Martin', 1, 100)
    personaje.SubirNivel()
