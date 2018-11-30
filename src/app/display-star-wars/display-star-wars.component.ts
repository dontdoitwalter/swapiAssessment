import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-star-wars',
  templateUrl: './display-star-wars.component.html',
  styleUrls: ['./display-star-wars.component.css']
})
export class DisplayStarWarsComponent{
  public _data
  constructor() { }

  ngOnInit() {
  }

  @Input()
    set data(stuff: any){
      this._data = stuff
    }
    get data() : any {
      return this._data
    }
}
