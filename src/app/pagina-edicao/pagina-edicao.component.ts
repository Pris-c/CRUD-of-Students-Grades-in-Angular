import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAluno } from '../alunos';
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
    private formBuilder: FormBuilder
    
  ){}

  ngOnInit(): void {
    this.alunoEdit = this.registrosService.alunoEdit;
    console.log(this.alunoEdit.nome);

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
