import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-work-locations',
  templateUrl: './work-locations.component.html',
  styleUrls: ['./work-locations.component.scss']
})
export class WorkLocationsComponent implements OnInit {

@Input () listData;
public searchData;
  constructor(
  private _filterService : FilterService
  ) { }

  ngOnInit(): void {
    this._filterService.search.subscribe(data=>{
      this.searchData = data;
    })

    }

}
