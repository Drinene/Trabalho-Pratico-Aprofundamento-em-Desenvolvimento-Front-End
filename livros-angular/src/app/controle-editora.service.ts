import { Injectable } from '@angular/core';

export interface Editora {
  codigo: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class ControleEditorasService {
  public editoras: Array<Editora> = [
    { codigo: 10, nome: "Intríseca" },
    { codigo: 20, nome: "Objetiva" },
    { codigo: 30, nome: "Darkside Books" }
  ];

  constructor() {}

getEditoras(): Editora[] {
  return this.editoras;
  }

  obterNomeEditora(codigo: number): string {
    const editora = this.editoras.filter(e => e.codigo === codigo)[0];
    return editora ? editora.nome : "Editora desconhecida";
  }
}

