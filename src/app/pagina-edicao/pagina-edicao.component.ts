import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAluno } from '../alunos';
import { NotificacaoService } from '../notificacao.service';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-pagina-edicao',
  templateUrl: './pagina-edicao.component.html',
  styleUrls: ['./pagina-edicao.component.css']
})
export class PaginaEdicaoComponent {

  alunoEdit: IAluno;
  private editId: number;

  constructor(
    private registrosService: RegistrosService,
    private router: Router,
    private formBuilder: FormBuilder,
    private notificacaoService: NotificacaoService
    
  ){}

  ngOnInit(): void {
    this.alunoEdit = this.registrosService.alunoEdit;
    console.log(this.alunoEdit.nome);

  }

  editarRegistro(){
      const alunoEdited: IAluno = {
        id: this.alunoEdit.id,
        nome: this.alunoFormGroup.value.nome,
        nota1: this.alunoFormGroup.value.nota1,
        nota2: this.alunoFormGroup.value.nota2,
        nota3: this.alunoFormGroup.value.nota3,
        media: this.registrosService.calcularMedia(this.alunoFormGroup.value.nota1, this.alunoFormGroup.value.nota2, this.alunoFormGroup.value.nota3),
        situacao: this.registrosService.situacao(this.registrosService.calcularMedia(this.alunoFormGroup.value.nota1, this.alunoFormGroup.value.nota2, this.alunoFormGroup.value.nota3))
      }
      this.registrosService.editarRegistro(alunoEdited);
      this.notificacaoService.notificar("Registro atualizado com sucesso");
      this.router.navigate(["pagina-registros"]);

  }



  alunoFormGroup = this.formBuilder.group({
    id: [],
    nome: ["", [
      Validators.minLength(10),
      Validators.required,
    ]],
    nota1: [[ 
      Validators.required,
      Validators.min(0),
      Validators.max(10),
      
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

}
