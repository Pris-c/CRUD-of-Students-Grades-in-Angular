import { Injectable } from '@angular/core';
import { IAluno } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  public bancoDeAlunos: IAluno[] = [];

  constructor() { }

  adicionarRegistro(novoAluno: IAluno){
    this.bancoDeAlunos.push(novoAluno);
    alert("Aluno adicionado!")
    console.log(this.bancoDeAlunos);
  }

  calcularMedia(nota1: number, nota2: number, nota3: number){
    const media: number = (nota1+nota2+nota3)/3;
    return media;
  }
 
  
}
