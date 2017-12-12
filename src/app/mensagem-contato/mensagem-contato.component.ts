import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../contato/contato.service';

@Component({
  selector: 'app-mensagem-contato',
  templateUrl: './mensagem-contato.component.html',
  styleUrls: ['./mensagem-contato.component.css']
})
export class MensagemContatoComponent implements OnInit {

  contato: string[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  	this.contato = this.contatoService.getContato();
  }

  onAddContato(contato: string){
  	this.contatoService.addContato(contato);
  }

}
