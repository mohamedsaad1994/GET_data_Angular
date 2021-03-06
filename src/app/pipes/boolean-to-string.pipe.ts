import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToString'
})
export class BooleanToStringPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): any {
    if(value){
      return 'Yes';
    }else{
      return 'No';

    }
  }
}
