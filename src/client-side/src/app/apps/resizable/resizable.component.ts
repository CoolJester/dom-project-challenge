import { Component } from '@angular/core';
import { ResizeDirective } from './resizable.directive';

@Component({
  selector: 'app-resizable',
  standalone: true,
  imports: [ResizeDirective],
  templateUrl: './resizable.component.html',
  styleUrl: './resizable.component.scss'
})
export class ResizableComponent {

}
