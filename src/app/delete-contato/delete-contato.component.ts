import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { switchMap } from 'rxjs/operators';
import {Canario} from "../Models/canario.model";

@Component({
  selector: 'app-delete-contato',
  templateUrl: './delete-contato.component.html',
  styles: []
})
export class DeleteContatoComponent implements OnInit {

  contato: Canario;

  constructor(
    private _contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.contato = new Canario();

    this.route.paramMap.pipe(
      switchMap(params => this._contatoService.get(+params.get("id")))
    )
    .subscribe(
      (c)=>{
        this.contato = c;
      },
      (error) => alert('Ocorreu um erro no servidor, tente novamente.')
    )
  }

  deletarContato() {
    this._contatoService.delete(this.contato).subscribe(
      () => this.router.navigateByUrl("contatos"),
      () => alert("Erro ao tentar excluir")
    )
  }

}
