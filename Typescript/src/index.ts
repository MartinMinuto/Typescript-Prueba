import { string } from "yargs"

function suma(a: number,b: number) {
    return a + b 
}

console.log(suma(5,8))

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