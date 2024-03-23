import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZenduFormModule } from './features/zendu-form/zendu-form.module';
import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ZenduFormModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyBboMD3ZzCcWPHhrv0WDIRVsU90xUTIez4 '
      apiKey: 'AIzaSyCPaWZ82O2KbXCsZwnZXq0Qe_kKu-SL_WA',
      // apiKey: 'AIzaSyDSY-Vn4m4fb4NJVFn51zGbzxAaMO6BYEc',
      libraries: ['places', 'drawing', 'geometry']
    })
    
  ],
  providers: [{provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
