import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  word: Array<string> = [];
  wordLine: Array<string>;

  constructor() { 
    this.wordLine = 'tiger'.split('');;
  }
  ngOnInit() {  
  }

  onPickedLetter(letter) {
    let tempWord = this.wordLine;
    let index = tempWord.indexOf(letter.toLowerCase());
    console.log(index);
    this.word[index] = letter;  
  }

}
