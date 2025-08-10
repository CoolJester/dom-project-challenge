import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-normal-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './normal-calculator.component.html',
  styleUrl: './normal-calculator.component.scss'
})
export class NormalCalculatorComponent {
  // Preview for changes on the calculator
  preview: string = '';

  // Total for expression
  total: string = '0';

  // Method to add something to the preview
  appendValue(value: string){
    console.log('This is value clicked: ', value);
    // Check if it's a value click and proceed only then
    // TODO;     

    // Update the preview
    this.preview =  this.preview + value;

  }

  // Method to clear the preview
  clearPreview(){
    this.preview = '';
  }
}
