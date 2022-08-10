import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CharacterData } from '../models/character-data';

@Injectable({
  providedIn: 'root'
})
export class HpApiService {

  private readonly APIUrl = environment.ApiUrl;
  

  constructor(private http:HttpClient) { }

  ParseQuery(url:string[]):string{
    
    url.shift();
    
    if (url.length > 1){
      if(url.length > 2){
        return `/${url[1]}/${url[2]}` ;
      }else{
        return '';
      }
    }else{
      if(url[0] == 'teachers'){
        return '/staff';
      }else{ 
        return `/${url}`;
      }
    }
    
  }

  GetDataFromApi(param:string = ''){
    return this.http.get<CharacterData[]>(this.APIUrl + param);
  }
}
