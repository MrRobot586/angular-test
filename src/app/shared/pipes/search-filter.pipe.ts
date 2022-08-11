import { Pipe, PipeTransform } from '@angular/core';
import { CharacterData } from '../models/character-data';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data:CharacterData[], search: string = ''):CharacterData[]{
    let res:CharacterData[] = [];
    search = search.toLowerCase();
    
    if(!search || search == ''){
      return data;
    }else{  
      data.forEach(char =>{
        if(char.name.toLowerCase().indexOf(search) != -1){
          res.push(char);
        }
      });
      return res;
    }
  }

}
