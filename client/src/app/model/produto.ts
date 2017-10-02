export class Produto {
    id: number;
    nome: string;
    categoria: string;
    marca: string;
    preco: number;
    descricao: string;
    informacao: string;
    mostrar: boolean = true;
    frete: boolean = false;
    posicao: number;
    
    constructor() {};

    
    // constructor(nome: string, categoria: string, marca: string,
    //             quantidade: number, uMedida: string, descricao: string)
    // {
    //     this.nome = nome;
    //     this.categoria = categoria;
    //     this.marca = marca;
    //     this.quantidade = quantidade;
    //     this.uMedida = uMedida;
    //     this.descricao = descricao;
    // }
}