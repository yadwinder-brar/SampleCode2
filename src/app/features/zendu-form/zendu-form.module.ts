import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZenduFormRoutingModule } from './zendu-form-routing.module';
import { SubmissionComponent } from './components/submission/submission.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkLocationsComponent } from './components/work-locations/work-locations.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};
@NgModule({
  declarations: [
    SubmissionComponent,
    WorkLocationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule,
    ZenduFormRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    })
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],

})
export class ZenduFormModule { }
