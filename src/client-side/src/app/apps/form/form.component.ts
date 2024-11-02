import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // Submit
  onSubmit(form: any){
    console.log('From Submitted: ', form.value);
  }
}
