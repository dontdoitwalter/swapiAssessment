import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from '../services/database.service'

@Component({
  selector: 'app-get-star-wars',
  templateUrl: './get-star-wars.component.html',
  styleUrls: ['./get-star-wars.component.css']
})
export class GetStarWarsComponent implements OnInit {
  searchArea=['films','people','starships']
  searchAPI:FormGroup
  searchTerm=[]
  swapiData: any[] = []

  constructor(private _fb:FormBuilder, private _dbService:DatabaseService) { }

  ngOnInit() {
    this.searchAPI = this._fb.group({
      searchTerm:new FormControl(),
      searchArea:new FormControl(),
      })
  }
onSearchAPI(): void{

  this._dbService.getData(this.searchAPI.controls['searchArea'].value,
  this.searchAPI.controls['searchTerm'].value)
  .subscribe((res:any) =>(this.swapiData = res))
  console.log(this.swapiData)
  }
}
