import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  alphabet: Array<string> = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  constructor() { }

  ngOnInit() {
    console.log(this.alphabet.length);
    
  }

}
