import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'submissions',
    pathMatch: 'full',
  },
  {
    path: 'submissions',
    loadChildren: () => import('./features/zendu-form/zendu-form-routing.module').then(m => m.ZenduFormRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
