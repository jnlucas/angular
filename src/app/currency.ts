import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currencyRS'})
export class currencyRS implements PipeTransform {
  transform(value: string): string {

    return 'R$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
}
