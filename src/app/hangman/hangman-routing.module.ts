import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';


const hangmanRoutes: Routes = [
  {path: '', component: BoardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(hangmanRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class HangmanRoutingModule {}