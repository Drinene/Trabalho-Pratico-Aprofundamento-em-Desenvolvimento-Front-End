import { Injectable } from '@angular/core';

export interface Livro {
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
  nomeEditora: string;
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  public livros: Livro[] = [
    {
      codEditora: 1,
      titulo: "O Homem de Giz – Nova Edição",
      resumo: "Em 1986, Eddie e seus amigos usam desenhos feitos a giz como código secreto. Um dia, um desses desenhos os leva até um corpo no bosque. Trinta anos depois, cartas misteriosas reaparecem e mortes voltam a acontecer. Eddie precisa enfrentar o passado para sobreviver.",
      autores: ["C. J. Tudor"],
      nomeEditora: "Nova Cultural"
    },
    {
      codEditora: 2,
      titulo: "Christine",
      resumo: "Arnie Cunningham compra um Plymouth Fury 1958 chamado Christine. O carro tem vida própria e começa a se vingar de quem faz mal ao garoto. Dennis, seu melhor amigo, tenta salvá-lo enquanto mortes misteriosas acontecem.",
      autores: ["Stephen King"],
      nomeEditora: "Objetiva"
    },
    {
      codEditora: 3,
      titulo: "Frankenstein",
      resumo: "Victor Frankenstein cria uma criatura viva a partir de matéria morta, mas a rejeita. A Criatura busca compreensão enquanto provoca uma profunda reflexão sobre humanidade, solidão e vingança. Um clássico do terror gótico e da ficção científica.",
      autores: ["Mary Shelley"],
      nomeEditora: "Darkside Books"
    }
  ];

obterLivros(): Livro[] {  
  return this.livros;
  }

  // Inclui um nov livro
  incluir(novoLivro: Omit<Livro, 'codigo'>) {
    const maiorCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codEditora)) : 0;
    this.livros.push({ ...novoLivro, codEditora: maiorCodigo + 1 });
  }

  // Exclui um livro pelo código
  excluir(codigo: number) {
    const index = this.livros.findIndex(l => l.codEditora === codigo);
    if (index > -1) this.livros.splice(index, 1);
  }
}
