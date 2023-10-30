import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, propName: string) {
    if (value.length <= 1) {
      return value;
    }
    const resultArray = value.sort((a, b) => {
      if (a[propName] < b[propName]) {
        return -1;
      } else if(a[propName] > b[propName]) {
        return 1;
      } else {
        return 0;
      }
    });
    
    return resultArray;
  }

}
