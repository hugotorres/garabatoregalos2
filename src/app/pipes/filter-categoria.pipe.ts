import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategoria'
})
export class FilterCategoriaPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg == 0) { return value; }
    const resultFiltered = [];
    for (const item of value) {
      if (item.categoria === arg) {
        resultFiltered.push(item);
      }
    }
    return resultFiltered;
    }
  }


