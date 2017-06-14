import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  @Input() letter: string;
  @Output() pickedLetter: EventEmitter<string> = new EventEmitter()
  clicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  pickLetter(letter) {
    this.clicked = true;
    this.pickedLetter.emit(letter);   
  }

}
