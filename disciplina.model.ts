export class Disciplina {
  nome: string;
  matricula: number;
  data: Date;
  responsavel: string;
  tipo: string;
  constructor(nome: string, matricula?: number,  data?: Date, responsavel?: string , tipo?: string) {
    this.nome = nome;
    this.matricula = matricula;
    this.data = data;
    this.responsavel = responsavel;
    this.tipo = tipo;
  }
}
