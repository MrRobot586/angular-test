import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { HpApiService } from '../../services/hp-api.service';
import { CharacterData } from '../../models/character-data';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public URLParamsObserver!: Subscription;
  public DataFromApi:CharacterData[] = [];
  
  public DetailsOf!:number;
  public GetDetails:Boolean = false;
  public NoData:Boolean = false;
  public DataLoaded:Boolean = false;

  public SortTable = {
    'colum' : '',
    'type': 'down',
    'icon': '',
    'active': false
  };

  constructor(private ApiService:HpApiService, private route:ActivatedRoute, private router:Router) {  }

  ngOnInit():void{ 
    this.URLParamsObserver = this.route.params.subscribe(() => {
      let query = '';
      query = this.ApiService.ParseQuery(this.router.url.split('/'));
      this.ApiService.GetDataFromApi(query).subscribe(data=>{
        this.DataFromApi = data;
        this.AddId();
        this.DataLoaded = true;
      });
    });
  }

  ngOnDestroy():void{
    this.URLParamsObserver?.unsubscribe();
  }

  AddId():void{
    this.DataFromApi.forEach((char,index) =>{
      this.DataFromApi[index].id = index + 1;
    });
  }

  ToggleSort(colum:string):void{
    this.SortTable.colum = colum;
    
    if(!this.SortTable.active){
      this.SortTable.active = true;
      this.SortTable.icon = 'bi bi-caret-down-fill';
    }else{
      if(this.SortTable.icon == 'bi bi-caret-down-fill' && this.SortTable.type == 'down'){
        this.SortTable.icon = 'bi bi-caret-up-fill';
        this.SortTable.type = 'up';
      }else{
        this.SortTable.icon = 'bi bi-caret-down-fill';
        this.SortTable.type = 'down';
      }
    }
  }
}
