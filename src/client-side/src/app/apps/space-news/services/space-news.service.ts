import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpaceNewsResponse } from '../Models/space-news';

@Injectable({
  providedIn: 'root',
})
export class SpaceNewsService {
  baseUrl: string = 'https://api.spaceflightnewsapi.net/v4/articles';

  articles: SpaceNewsResponse | null;

  constructor(private http: HttpClient) {}

  // Get Space News
  async getSpaceNews(): Promise<void> {
    try {
      const response = await this.http
        .get<SpaceNewsResponse>(this.baseUrl)
        .toPromise();
      this.articles = response;
      console.log('Response', response);
    } catch (error) {
      alert('Something went wrong: ' + error);
      this.articles = null;
      console.error(error);
    }
  }

  // Get Space News with Url
  async getSpaceNewsWithUrl(url: string): Promise<void> {
    try {
      const response = await this.http.get<SpaceNewsResponse>(url).toPromise();
      this.articles = response;
      console.log('Response', response);
    } catch (error) {
      alert('Something went wrong: ' + error);
      this.articles = null;
      console.error(error);
    }
  }

  // Get Space News by Id
  async getSpaceNewsById(id: number): Promise<void> {
    try {
      const response = await this.http
        .get<SpaceNewsResponse>(`${this.baseUrl}/${id}`)
        .toPromise();
      this.articles = response;
      console.log('Response', response);
    } catch (error) {
      alert('Something went wrong: ' + error);
      this.articles = null;
      console.error(error);
    }
  }

  getArticles(): SpaceNewsResponse {
    return this.articles;
  }
}
