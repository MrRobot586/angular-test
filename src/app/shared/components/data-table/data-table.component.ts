import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { HpApiService } from '../../services/hp-api.service';
import { CharacterData } from '../../models/character-data';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public URLParamsSub!: Subscription;

  public DataFromApi:CharacterData[] = []; 

  constructor(private ApiService:HpApiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { 
    this.URLParamsSub = this.route.params.subscribe(() => {
      let query = '';
      query = this.ApiService.ParseQuery(this.router.url.split('/'));
      this.ApiService.GetDataFromApi(query).subscribe(data=>{
        this.DataFromApi = data;
      });
    });
  }

  ngOnDestroy():void{
    this.URLParamsSub?.unsubscribe();
  }
}
