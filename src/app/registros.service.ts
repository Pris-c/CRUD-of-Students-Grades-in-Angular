import { Injectable } from '@angular/core';
import { IAluno } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  listaDeAlunos: IAluno[] = []; 

  constructor() { }

  adicionarAluno(registro: IAluno){
    
    this.listaDeAlunos.push(registro);
  }

  
  
}
