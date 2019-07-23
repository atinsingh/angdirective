import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(args)
    let countryCode = 0;
    if ( args === 'us' ) {
      countryCode = 1;
    }
    if ( args === 'in' ) {
      countryCode = 91;
    }

    const formattedPhone  = '+' + countryCode + '(' + value.substring(0, 3) + ')-' + value.substring(3, 6) + '-' + value.substring(6, 10)
    return formattedPhone;
  }

}
