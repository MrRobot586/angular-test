import { Pipe, PipeTransform } from '@angular/core';
import { CharacterData } from '../models/character-data';
@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(data:CharacterData[], sortby = '' ,sort_arg = '' ):CharacterData[]{
    
    let res:CharacterData[] = [];
    
    function SortArray(x:CharacterData, y:CharacterData){
      return x.name.localeCompare(y.name, 'fr', {ignorePunctuation: true});
    }

    if(!sortby || sortby == ''){
      res = data;
    } else{
      if(sortby === 'number'){// Sort by number
        res = data.reverse();
      }else if(sortby === 'name'){ // Sort by name
        if(sort_arg == 'down'){
          res = data.sort(SortArray)
        }else if(sort_arg == 'up'){
          res = data.sort(SortArray);
          res = res.reverse();
        }
      }
    }

    return res;
  }

}
