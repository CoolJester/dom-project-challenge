import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-basic-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic-calculator.component.html',
  styleUrl: './basic-calculator.component.scss',
})
export class BasicCalculatorComponent {
  // value for the front-end calculator
  numberOne: string;
  numberTwo: string;
  operator: string;
  result: string;

  evaluateExpression(){
    var expression = `${this.numberOne} ${this.operator} ${this.numberTwo}`;

    try {
      var result = evaluate(expression);
      console.log(`Experssion: ${expression} Evaluation: ${result}`);
    } catch (error) {
      console.warn(`Experssion: ${expression}`);
      console.error('Something went wrong: ', error);
    }
  }

  reset(){
    this.numberOne = null;
    this.numberTwo = null;
    this.result = null;
  }
}
