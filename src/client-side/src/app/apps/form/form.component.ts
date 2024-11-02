import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

type FormData = {
  username: string,
  email: string,
  password: string,
  repassword: string
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  // Display control
  formDisplay: boolean = true;
  formData: FormData = {username: '',email: '', password: '', repassword: ''};

  // Submit
  onSubmit(form: any){
    console.log('From Submitted: ', form.value);
    this.formData = form.value;
    this.formDisplay = !this.formDisplay;
  }
}
