import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaRegistrosComponent } from './pagina-registros/pagina-registros.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: "principal", component: PrincipalComponent },
  { path: "", component: PrincipalComponent },
  { path: "pagina-registros", component: PaginaRegistrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
