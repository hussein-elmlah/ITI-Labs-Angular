import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'older',
  standalone: true
})
export class OlderPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.log(value);
return value > 30 ? 'Allowed' : 'NotAllowed' ;  }

}
