import { Component } from '@angular/core';
import { IAluno } from '../alunos';
import { RegistrosService } from '../registros.service';

@Component({
  selector: 'app-pagina-registros',
  templateUrl: './pagina-registros.component.html',
  styleUrls: ['./pagina-registros.component.css']
})
export class PaginaRegistrosComponent {
  bancoDeAlunos: IAluno[] = this.registrosService.bancoDeAlunos;
  

  status(media: number){
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

  constructor(
    private registrosService: RegistrosService,
  ){}

  ngOnInit(): void {
  }

  
  

}
