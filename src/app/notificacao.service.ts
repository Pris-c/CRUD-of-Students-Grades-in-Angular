import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor() { }

  notificar(mensagem: string){
    alert(mensagem);
  }

}