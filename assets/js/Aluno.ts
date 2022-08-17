export class Aluno {
  public nome: string;
  public idade: number;
  public cidade: string;
  private notas: Array<number>;

  constructor(
    nome: string,
    idade: number,
    cidade: string,
    notas: Array<number>
  ) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    this.notas = notas;
  }

  public apresentar(): string {
    return `Oi meu nome é ${this.nome} e minha idade é ${this.idade}, moro em ${this.cidade} e estou cursando o entra21`;
  }

  public calcularMedia(): number {
    return (
      this.notas.reduce((anterior, posterior) => anterior + posterior, 0) /
      this.notas.length
    );
  }
}
