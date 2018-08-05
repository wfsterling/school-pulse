import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from '../help/help.component';
import { TipComponent } from '../tip/tip.component';
import { CheckinComponent } from '../checkin/checkin.component';
import { AccountComponent } from '../account/account.component';



const routes: Routes = [
  {
      path: '',
      component: CheckinComponent,
  },
  {
      path: 'help',
      component: HelpComponent,
  },
  {
    path: 'tip',
    component: TipComponent,
  },
  {
    path: 'home',
    component: CheckinComponent,
  },
  {
      path: 'account',
      component: AccountComponent,
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
