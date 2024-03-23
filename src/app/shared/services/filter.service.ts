import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() {}
  public search = new BehaviorSubject<any>('');
  public filteredData = new BehaviorSubject<any>('');
  public toggle = new Subject<any>();
  public tableData = new Subject<any>();
}
