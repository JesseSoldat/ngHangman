import { HangmanRoutingModule } from './hangman-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board/board.component';
import { CountComponent } from './board/count/count.component';
import { AlphabetComponent } from './board/alphabet/alphabet.component';
import { LetterComponent } from './board/alphabet/letter/letter.component';

@NgModule({
  declarations: [
    BoardComponent,
    CountComponent,
    AlphabetComponent,
    LetterComponent
  ],
  imports: [
    CommonModule,
    HangmanRoutingModule
  ],
  providers: []
})
export class HangmanModule { }