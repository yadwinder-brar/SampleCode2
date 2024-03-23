import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropDownComponent } from './form-controls/drop-down/drop-down.component';
import { DatePickerComponent } from './form-controls/date-picker/date-picker.component';
import { InputComponent } from './form-controls/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MapComponent } from './components/common-map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SearchPipe } from './pipes/search.pipe';
import { TableComponent } from './components/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const Components = [
  HeaderComponent,
  FooterComponent,
  DropDownComponent,
  DatePickerComponent,
  InputComponent,
  TableComponent,
  MapComponent,
  SearchPipe
]

const materialModule = [
  MatToolbarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule,
  MatButtonToggleModule,
  MatIconModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    Components,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBboMD3ZzCcWPHhrv0WDIRVsU90xUTIez4'
    }),
    materialModule

  ],
  exports: [
    Components,
    materialModule

  ]
})
export class SharedModule { }
