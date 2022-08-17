import { Professor } from './Professor.js';
import { Aluno } from "./Aluno.js";


let filipe: Aluno = new Aluno("Filipe", 20, "Imbituba-SC", [9,10,10])
let ariana: Aluno = new Aluno("Ariana", 22, "Joaçaba-SC", [10,10,10])
let emerson: Aluno = new Aluno("Emerson", 29, "Itajai-SC", [9,10,10])

let oliota: Professor = new Professor("Oliota", 35, "Blumenau", [filipe, ariana, emerson])


console.log(filipe.apresentar());
console.log(filipe.calcularMedia());

console.log(ariana.apresentar(), ariana.calcularMedia());
console.log(emerson.apresentar(), emerson.calcularMedia());

console.log(oliota.apresentar(), oliota.gerarBoletins());

    

