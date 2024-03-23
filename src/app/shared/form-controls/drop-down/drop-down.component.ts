import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() ddlOptions;
  @Input() controlName: string;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form.controls[this.controlName].setValue(this.ddlOptions[0].value);
  }
}