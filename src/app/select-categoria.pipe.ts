import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from 'src/models/produto.model';

@Pipe({
  name: 'selectCategoria'
})
export class SelectCategoriaPipe implements PipeTransform {

  transform(items: Produto[], filter: string): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => filter=='' || item.categoria == filter);
  }

}
