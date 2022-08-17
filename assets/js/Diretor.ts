import { Professor } from './Professor.js';
export class Diretor{

    public nome:string
    public idade:number
    public cidade:string
    private professores:Array<Professor>

constructor(nome:string, idade:number, cidade:string, professores:Array<Professor>){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.professores = professores;



}

public apresentar():string{

return `Olá, meu nome é ${this.nome}, tenho ${this.idade}. moro em ${this.cidade} e gerencio esses professores ${this.professores}`
}



}