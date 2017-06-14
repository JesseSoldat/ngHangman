import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    NavComponent
  ],
  providers: [

  ]
})
export class CoreModule {}