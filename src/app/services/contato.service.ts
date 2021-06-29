import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Canario} from "../Models/canario.model";
import {CrudService} from "./crud.service";

@Injectable({
  providedIn: 'root'
})
export class ContatoService extends CrudService<Canario> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'canario');
  }
}
