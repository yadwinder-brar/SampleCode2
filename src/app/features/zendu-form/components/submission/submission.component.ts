import { Component, OnInit } from '@angular/core';
import { submissionData } from '../../submissionData/apiData';
import { states } from '../../submissionData/apiData';
import { formType } from '../../submissionData/apiData';
import { list } from '../../models/list.model'
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  VERSION,
  NgZone,
  ViewChild,
  ElementRef
} from "@angular/core";
import { MouseEvent, LatLngLiteral } from "@agm/core";
import { BehaviorSubject } from "rxjs";
import { MapsAPILoader } from "@agm/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})

export class SubmissionComponent implements OnInit {
  @ViewChild("search", { static: false }) searchElementRef: ElementRef;
  submissionsList: list[];
  public searchControl: FormControl;
  map_zoom: number = 4;
  lat: number = 51.673858;
  lng: number = 7.815982;
  states: any[];
  formType: any[];
  toggleView: string = "map";
  formGroup: FormGroup;
  exportIcon:string = "../../../../assets/images/icon/paper-download.svg";
  constructor(public _formBuilder: FormBuilder ,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    this.formGroup = this._formBuilder.group({
      'searchText': [''],
      'formType': [''],
      'state': [''],
      'dueDate': ['']
    })
  }

  toggle(value) {
    this.toggleView = value;
  }

  ngOnInit(): void {
    this.searchControl = new FormControl();
    this.submissionsList = submissionData;
    this.states = states;
    this.formType = formType;
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["address"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.map_zoom = 12;
        });
      });
    });
  }
}