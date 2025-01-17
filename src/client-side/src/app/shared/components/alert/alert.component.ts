import { Component, Input } from '@angular/core';
import { AlertPayload, AlertType } from '../../models/alert.model';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() alertPayload: AlertPayload = {};
}
