import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { CountComponent } from './board/count/count.component';

@NgModule({
  declarations: [
    BoardComponent,
    CountComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class AppModule { }