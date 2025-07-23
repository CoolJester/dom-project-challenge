import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

type jokeResponse = {
  id: string,
  joke: string,
  status: number
  results?: Array<jokeResponse>
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
  joke: string = "Click the button for a random joke 😉";
  jokes: jokeResponse;
  selectedJoke: number = 0;
  loading: boolean = false;
  
  constructor(private http: HttpClient){}

  // Function to get joke
  getJoke(input: string){
    // Base url
    var baseUri = 'https://icanhazdadjoke.com/';

    // Check text
    if(input)
      baseUri += `search?term=${input}`;

    // Disable button
    this.loading = true;
    this.http.get<jokeResponse>(baseUri, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .subscribe(response => {
      // Clear cached data 
      this.clearCache();

      // Check if not blank
      if(input)
        

      // Update joke if one joke is there
      if(!response.results){
        this.joke = response.joke;
      }else{
        this.jokes = response;
      }

      // Enable button
      this.loading = false;
    }, error => {
      // When job fails
      alert(`Failed to get joke, error ${error}`);

      // Enable button
      this.loading = false;
    });
  }

  nextJokeClicked(){
    // Check 
    if(this.selectedJoke < this.jokes.results.length){
      this.selectedJoke += 1;
    }else{
      this.selectedJoke = 0;
    }
  }

  clearCache(){
    this.joke = null;
    this.jokes = null;
  }
}
