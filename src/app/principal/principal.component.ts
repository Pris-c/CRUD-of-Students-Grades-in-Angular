import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IAluno } from '../alunos';
import { NotificacaoService } from '../notificacao.service';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {
  private bancoDeAlunos: IAluno[] = [];
  private idNumber: number = 2;
  //private novoAluno: IAluno;

  constructor(
    private registrosService: RegistrosService,
    private notificacaoService: NotificacaoService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {}

  alunoFormGroup = this.formBuilder.group({
  
    nome: ["", [
      Validators.minLength(10),
      Validators.required,
    ]],
    nota1: [[ 
      Validators.required,
      Validators.min(0),
      Validators.max(10)
    ]],
    nota2: [[ 
      Validators.min(0),
      Validators.max(10),
      Validators.required
    ]],
    nota3: [[ 
      Validators.min(0),
      Validators.max(10),
      Validators.required
    ]],

  })


  adicionarRegistro(){
    const novoAluno: IAluno = {
      id: this.idNumber,
      nome: this.alunoFormGroup.value.nome,
      nota1: this.alunoFormGroup.value.nota1,
      nota2: this.alunoFormGroup.value.nota2,
      nota3: this.alunoFormGroup.value.nota3
    }
    this.bancoDeAlunos.push(novoAluno);
    alert("Aluno adicionado!")
    console.log(this.bancoDeAlunos);
  }
}
