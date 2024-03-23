import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './components/submission/submission.component';

const routes: Routes = [
  {
    path:'submissions',
    component:SubmissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZenduFormRoutingModule { }
