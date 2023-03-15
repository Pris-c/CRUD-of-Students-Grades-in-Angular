import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAluno } from '../alunos';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-pagina-registros',
  templateUrl: './pagina-registros.component.html',
  styleUrls: ['./pagina-registros.component.css']
})
export class PaginaRegistrosComponent {
  bancoDeAlunos: IAluno[] = this.registrosService.bancoDeAlunos;
  
  constructor(
    private registrosService: RegistrosService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.bancoDeAlunos = this.registrosService.obtemRegistros();
  }

  deletarRegistro(id:number){
    this.registrosService.deletarRegistro(id);
    this.bancoDeAlunos = this.bancoDeAlunos.filter(item => item.id !== id);
  }
  
  setId(aluno: IAluno){
    this.registrosService.setId(aluno);
    console.log(this.registrosService.bancoDeAlunos);
    this.router.navigate(["pagina-edicao"]);
    }

}
