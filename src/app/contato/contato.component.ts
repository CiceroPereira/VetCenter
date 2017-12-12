import { Component, OnInit } from '@angular/core';

import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: string[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  	this.contato = this.contatoService.getContato();
  }

  onAddContato(contato: string, email: string, telefone: string, assunto: string, msg: string){

  	if(contato != "" &&  msg != "" && telefone != ""){
  	contato = `NOME: `  + contato  +   `   EMAIL:
  	`  + email + `  TELEFONE: ` + telefone + `  ASSUNTO: ` + assunto + `    MENSAGEM: ` + msg ;

  	this.contatoService.addContato(contato);

  	alert("Mensagem enviada \nA Vetcenter agradece")
  	//location.reload();
  //	window.location.reload()
  }
  }

}
