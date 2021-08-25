import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from 'src/models/produto.model';

@Pipe({
  name: 'selectEstado'
})
export class SelectEstadoPipe implements PipeTransform {

  transform(items: Produto[], filter: string): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => filter=='' || item.estado == filter);
  }

}
