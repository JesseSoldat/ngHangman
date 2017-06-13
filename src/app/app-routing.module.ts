import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './core/dashboard/dashboard.component'

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'hangman', loadChildren: './hangman/hangman.module#HangmanModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}