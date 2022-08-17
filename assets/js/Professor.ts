import { Pessoa } from './Pessoa.js';
import { Aluno } from "./Aluno.js";
export class Professor extends Pessoa{
    // public nome:string;
    // public idade:number;
    // public cidade:string;
    public alunos:Array<Aluno>;

    // constructor(nome:string, idade: number, cidade:string, alunos:Array<Aluno>){
    //     this.nome = nome;
    //     this.idade = idade;               
    //     this.cidade = cidade
    //     this.alunos = alunos;

    // }

    constructor(nome:string, idade:number,cidade:string, alunos:Array<Aluno>){
        super(nome, idade, cidade);
        this.alunos = alunos;

    }

    public apresentar():string{
        

        
        
        return `Olá, sou o Professor ${this.nome}, tenho ${this.idade}, moro em ${this.cidade} e dou aula para os alunos ${this.alunos}`
    }


    public gerarBoletins():Array<number>{

        let boletins: Array<number> = [];
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia())
        });
        return boletins;
    }



}