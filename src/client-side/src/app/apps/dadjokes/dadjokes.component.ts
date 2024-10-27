import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

type jokeResponse = {
  id: string,
  joke: string,
  status: number
}

@Component({
  selector: 'app-dadjokes',
  standalone: true,
  imports: [],
  templateUrl: './dadjokes.component.html',
  styleUrl: './dadjokes.component.scss'
})
export class DadjokesComponent {
  // Variables
  joke: string = "Some Joke";
  loading: boolean = false;
  
  constructor(private http: HttpClient){}

  // Function to get joke
  getJoke(){
    // Disable button
    this.loading = true;
    this.http.get<jokeResponse>('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .subscribe(response => {
      // Update joke variable on success
      this.joke = response.joke;

      // Enable button
      this.loading = false;
    }, error => {
      // When job fails
      alert(`Failed to get joke, error ${error}`);

      // Enable button
      this.loading = false;
    });


  }
}
