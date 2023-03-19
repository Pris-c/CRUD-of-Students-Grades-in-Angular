import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEdicaoComponent } from './pagina-edicao/pagina-edicao.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaRegistrosComponent } from './pagina-registros/pagina-registros.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: "", component: PaginaInicialComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "pagina-registros", component: PaginaRegistrosComponent},
  { path: "pagina-edicao", component: PaginaEdicaoComponent},
  { path: "pagina-inicial", component: PaginaInicialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
