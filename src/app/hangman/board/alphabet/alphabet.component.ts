import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  alphabet: Array<string> = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  @Output() pickedLetter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  onPickedLetter(letter) {
    this.pickedLetter.emit(letter);   
  }

}
