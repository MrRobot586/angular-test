import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GetAge'
})
export class GeTagePipe implements PipeTransform {

  transform(value: number):String{
    const CurrentYear = new Date();
    return (`${CurrentYear.getFullYear() - value} years old`);
  }

}
