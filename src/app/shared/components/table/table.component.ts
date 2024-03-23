import { AfterViewInit, ChangeDetectorRef, Component, Input,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;

  @Input() tableData;
  
  dataSource: any;
  displayedColumns: string[] = ['Task', 'Status', 'From', 'To', 'Customer Address', 'Due Date'];
  pageSize = [5, 10, 25, 50, 100];

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.paginator = this.paginator;
    this.cdref.detectChanges();
  }
}