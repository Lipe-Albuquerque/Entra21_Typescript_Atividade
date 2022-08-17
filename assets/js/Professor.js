import { Pessoa } from './Pessoa.js';
export class Professor extends Pessoa {
    // constructor(nome:string, idade: number, cidade:string, alunos:Array<Aluno>){
    //     this.nome = nome;
    //     this.idade = idade;               
    //     this.cidade = cidade
    //     this.alunos = alunos;
    // }
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    apresentar() {
        return `Olá, sou o Professor ${this.nome}, tenho ${this.idade}, moro em ${this.cidade} e dou aula para os alunos ${this.alunos}`;
    }
    gerarBoletins() {
        let boletins = [];
        this.alunos.forEach(aluno => {
            boletins.push(aluno.calcularMedia());
        });
        return boletins;
    }
}
