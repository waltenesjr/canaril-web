import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import {Canario} from "../Models/canario.model";

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styles: []
})
export class ListaContatosComponent implements OnInit {

  contatos: Canario[] = [];

  constructor(
    private _contatoService: ContatoService,
  ) { }

  ngOnInit() {
    this._contatoService.getAll().subscribe(
      c => this.contatos = c,
      error => alert('Erro ao carregar a lista')
    )
  }

  get filtrarContatos() {
    return this.contatos.filter( x => x.id > 0);
  }
}
