import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor() { }

transform(items: any[], searchText: string, formType: string, state: string, dueDate: any): any[] {

  let result = items.filter(item =>
    (searchText == "" || ["from", "to", "workFlow", "dueDate", "status", "state", "address"].some(key => String(item[key]).toLowerCase().includes(searchText?.toLowerCase())))
    && (formType == "" || item.status == formType) && (state == "" || item.state == state)
    && (dueDate == "" || item.dueDate == moment(dueDate).format("DD MMMM")));
  return result;
}
 


}
