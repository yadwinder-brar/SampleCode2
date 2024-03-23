import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() form: FormGroup;
  @Input() controlName: string;

  constructor() { }


  clearDate() {
    this.form.controls[this.controlName].setValue('');
  }
}
