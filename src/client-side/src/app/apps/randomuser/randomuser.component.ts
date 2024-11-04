import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserResponse } from './UserResponse.model';



@Component({
  selector: 'app-randomuser',
  standalone: true,
  imports: [],
  templateUrl: './randomuser.component.html',
  styleUrl: './randomuser.component.scss'
})
export class RandomuserComponent implements OnInit{

  // Storing user data
  userData: UserResponse;
  displayValues: Array<{heading: string, content: string}>;
  displayIndex: number = 0

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log('Page load');
    this.getUser();
    this.updateDisplay();
  }
  
  // Function to get User
  getUser(){
    this.http.get<UserResponse>('https://randomuser.me/api/').subscribe(
      response => {
        console.log('User response: ', response);
        this.userData = response;
        this.updateDisplay();
      }, error => {
        alert('Something went wrong');
      }
    );
  }

  // Change what to display
  changeDisplayIndex(index: number){
    this.displayIndex = index;
  }

  // Update the snapshot of the display
  updateDisplay(){
    this.displayValues = [
      {
        heading: 'Hi, my name is',
        content: `${this.userData.results[0].name.first || ''} ${this.userData.results[0].name.last || ''}`
      },
      {
        heading: 'My Email address is',
        content: this.userData.results[0].email || ''
      },
      {
        heading: 'My phone number is',
        content: this.userData.results[0].phone || ''
      },
      {
        heading: 'I live at',
        content: `${this.userData.results[0].location.city || ''}, ${this.userData.results[0].location.country || ''}`
      },
    ]
  }
}
