import { Component } from '@angular/core';
import { morseIndex, MorseType } from './morse.model';



@Component({
  selector: 'app-morse',
  standalone: true,
  imports: [],
  templateUrl: './morse.component.html',
  styleUrl: './morse.component.scss'
})
export class MorseComponent {
  // Variables
  morseCode: Array<MorseType> = morseIndex;

  constructor(){
    console.log('Morse codes ', this.morseCode);
  }
}
