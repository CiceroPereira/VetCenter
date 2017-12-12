import { Injectable } from '@angular/core';

@Injectable()
export class ContatoService{

	private contato: string[] = [];

	constructor(){
		console.log('ContatoService');
	}
	
	getContato() {
		return this.contato;
	}

	addContato(contato: string){
		this.contato.push(contato);
	}

}