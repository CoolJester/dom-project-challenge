import { Component, OnInit } from '@angular/core';
import { SpaceNewsService } from './services/space-news.service';
import { SpaceNewsResponse } from './Models/space-news';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-space-news',
  standalone: true,
  imports: [NgClass],
  templateUrl: './space-news.component.html',
  styleUrl: './space-news.component.scss',
})
export class SpaceNewsComponent implements OnInit {
  spaceArticles: SpaceNewsResponse;
  constructor(private spaceService: SpaceNewsService) {}

  ngOnInit() {
    console.log('Getting first items...');

    // Get the base values by default
    this.spaceService
      .getSpaceNews()
      .then(() => {
        this.spaceArticles = this.spaceService.getArticles();
      })
      .catch((error) => {
        console.error('Error fetching space news:', error);
      });
  }

  articleClicked(articleId: number) {
    // Get the clicked article
    this.spaceService
      .getSpaceNewsById(articleId)
      .then(() => {
        this.spaceArticles = this.spaceService.getArticles();
      })
      .catch((error) => {
        console.error('Error fetching space news:', error);
      });
  }

  nextClicked() {
    // making a request to next
    this.spaceService
      .getSpaceNewsWithUrl(this.spaceArticles.next)
      .then(() => {
        this.spaceArticles = this.spaceService.getArticles();
      })
      .catch((error) => {
        console.error('Error fetching space news:', error);
      });
  }

  prevClicked() {
    // making a request to previous
    this.spaceService
      .getSpaceNewsWithUrl(this.spaceArticles.previous)
      .then(() => {
        this.spaceArticles = this.spaceService.getArticles();
      })
      .catch((error) => {
        console.error('Error fetching space news:', error);
      });
  }
}
