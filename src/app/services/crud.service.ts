import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Entity} from "../Models/entity";

export abstract class CrudService<T extends Entity> {

  baseUrl = environment.API_URL;
  url: string;

  protected constructor(private http: HttpClient, path: string) {
    this.url = this.baseUrl + '/' + path;
  }

  delete(object: T): Observable<any> {
    const finalUrl = this.url + '/' + object.id;
    return this.http.delete<any>(finalUrl);
  }

  get(id: number): Observable<any> {
    const url = this.url + '/' + id;
    return this.http.get<any>(url);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  add(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity);
  }

  edit(entity: T): Observable<T> {
    return this.http.put<T>(this.url + '/' + entity.id, entity);
  }
}
