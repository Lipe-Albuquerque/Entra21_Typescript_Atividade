export class Diretor {
    constructor(nome, idade, cidade, professores) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.professores = professores;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade}. moro em ${this.cidade} e gerencio esses professores ${this.professores}`;
    }
}
