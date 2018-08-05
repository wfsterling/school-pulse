import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from '../checkin/checkin.component';

const routes: Routes = [
  {
      path: '',
      component: CheckinComponent,
  },
  {
      path: 'help',
      component: CheckinComponent,
  },
  {
    path: 'tip',
    component: CheckinComponent,
  },
  {
    path: 'home',
    component: CheckinComponent,
  },
  {
      path: 'account',
      component: CheckinComponent,
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
