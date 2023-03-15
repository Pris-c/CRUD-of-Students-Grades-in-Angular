import { Injectable } from '@angular/core';
import { IAluno } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  public bancoDeAlunos: IAluno[] = [];
  public lastId: number = 0;
  public editId: number;
  public indexId: number;
  public alunoEdit: IAluno;

  constructor() { }

  adicionarRegistro(novoAluno: IAluno){
    this.bancoDeAlunos.push(novoAluno);
    localStorage.setItem("registros", JSON.stringify(this.bancoDeAlunos));
    this.lastId++;
    localStorage.setItem("lastId", this.lastId.toString());
    
    alert("Aluno adicionado!")
    console.log(this.bancoDeAlunos);
  }

  deletarRegistro(alunoId: number){
    this.bancoDeAlunos = this.bancoDeAlunos.filter(item => item.id !== alunoId);
    localStorage.setItem("registros", JSON.stringify(this.bancoDeAlunos));
  }

  setId(aluno: IAluno){
    this.alunoEdit = aluno;
    //console.log(this.bancoDeAlunos);
    //console.log(this.alunoEdit.nome);
  }



  obtemRegistros(){
    this.bancoDeAlunos = JSON.parse(localStorage.getItem("registros") || "[]");
    return this.bancoDeAlunos;
   }

   obtemAluno(idAluno: number){
    return this.alunoEdit = this.bancoDeAlunos.at(this.editId);
   }  

   obtemLastId(){
    this.lastId = Number(localStorage.getItem("lastId") || "0");
    return this.lastId;
   }


  calcularMedia(nota1: number, nota2: number, nota3: number){
    const media: number = (nota1+nota2+nota3)/3;
    return media;
  }
 
  situacao(media: number){
    if(media<5){
      return "Reprovado";
    }
    else if (media<7){
      return "Em recuperação";
    }
    else{
      return "Aprovado";
    }
  }
  
}
