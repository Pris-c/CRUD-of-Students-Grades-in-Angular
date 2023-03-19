import { Injectable } from '@angular/core';
import { IAluno } from './alunos';
import { NotificacaoService } from './notificacao.service';

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
    notificacao: NotificacaoService;

  adicionarRegistro(novoAluno: IAluno){
    this.bancoDeAlunos.push(novoAluno);
    localStorage.setItem("registros", JSON.stringify(this.bancoDeAlunos));
    this.lastId++;
    localStorage.setItem("lastId", this.lastId.toString());
    console.log(this.bancoDeAlunos);
  }

  deletarRegistro(alunoId: number){
    this.bancoDeAlunos = this.bancoDeAlunos.filter(item => item.id !== alunoId);
    localStorage.setItem("registros", JSON.stringify(this.bancoDeAlunos));
  }

  setId(aluno: IAluno){
    this.alunoEdit = aluno;
  }

  editarRegistro(alunoEdited: IAluno){
    for (var i=0; i < this.bancoDeAlunos.length; i++){
      var alunoBanco = this.bancoDeAlunos[i];
      if (alunoBanco.id == alunoEdited.id){
        alunoBanco.nome = alunoEdited.nome;
        alunoBanco.nota1 = alunoEdited.nota1;
        alunoBanco.nota2 = alunoEdited.nota2;
        alunoBanco.nota3 = alunoEdited.nota3;
        alunoBanco.media = alunoEdited.media;
        alunoBanco.situacao = alunoEdited.situacao;
        localStorage.setItem("registros", JSON.stringify(this.bancoDeAlunos)); 
      }
    }
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
