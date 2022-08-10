import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { HpApiService } from '../../services/hp-api.service';
import { CharacterData } from '../../models/character-data';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  public DataFromApi:CharacterData[] = []; 

  constructor(private ApiService:HpApiService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void { 
    this.route.params.subscribe((params: Params) => {
      let query = '';
      query = this.ApiService.ParseQuery(this.router.url.split('/'));
      this.ApiService.GetDataFromApi(query).subscribe(data=>{
        this.DataFromApi = data;
      });
    });
  }
}
