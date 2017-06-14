import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() wordLine: Array<string>;
  @Input() word: Array<string>;
  guessedLetter: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
