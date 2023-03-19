import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PaginaRegistrosComponent } from './pagina-registros/pagina-registros.component';
import { PaginaEdicaoComponent } from './pagina-edicao/pagina-edicao.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    PaginaRegistrosComponent,
    PaginaEdicaoComponent,
    FooterComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
