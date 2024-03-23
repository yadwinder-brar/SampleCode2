import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dynamicClass : boolean = false;
  constructor() { }
  
  onClick(){
    this.dynamicClass  = !this.dynamicClass;
  }
}
