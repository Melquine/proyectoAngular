import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstletter'
})
export class FirstletterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    try{
      const capitalize = value.charAt(0).toUpperCase() + value.slice(1)
      console.log(capitalize)
      return capitalize
    }catch(e) {
      return value
    }
  }

}
