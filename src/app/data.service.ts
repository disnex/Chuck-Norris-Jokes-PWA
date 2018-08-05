import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _data: HttpClient) { }

  gimmeJokes(){
    return this._data.get('https://api.chucknorris.io/jokes/random');
  }
}
