import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  // Value on the front
  userNumber: number = 0;
}
