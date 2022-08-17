export class Aluno {
    constructor(nome, idade, cidade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.notas = notas;
    }
    apresentar() {
        return `Oi meu nome é ${this.nome} e minha idade é ${this.idade}, moro em ${this.cidade} e estou cursando o entra21`;
    }
    calcularMedia() {
        return (this.notas.reduce((anterior, posterior) => anterior + posterior, 0) /
            this.notas.length);
    }
}
