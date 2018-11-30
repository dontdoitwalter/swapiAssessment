import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _dbURL = 'https://swapi.co/api/'

  constructor(private _http: HttpClient) { }

  getData(searchArea:string, searchTerm:string) : Observable<any> {
    return this._http.get<any>(`${this._dbURL}${searchArea}/?search=${searchTerm}`)
  }
}