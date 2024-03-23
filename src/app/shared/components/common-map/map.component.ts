import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input () locations?;
  icon = {
    url: '/assets/images/icon/mapicon.svg',
    scaledSize: {
      width: 30,
      height: 30}
    };
  lat: number = 37.090240;
  lng: number = -95.712891;
  zoom: number = 4;
  scroll: boolean = false;
  constructor() { }

}