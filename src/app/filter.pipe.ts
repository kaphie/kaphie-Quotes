import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(quote: any[], searchText: string): any [] {
    if (!quote) {
      return [];
    }
    if (!searchText) {
      return quote;
    }

    searchText = searchText.toLowerCase();

    return quote.filter(it => {
      return it.title.toLowerCase().includes(searchText);
    });

  }
}
