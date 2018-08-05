import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  joke: any;

  constructor(private _data: DataService, updates: SwUpdate){
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(){
    this._data.gimmeJokes().subscribe(res => {
      this.joke = res;
    })
  }

}
