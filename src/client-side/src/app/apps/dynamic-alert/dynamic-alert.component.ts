import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { AlertPayload, AlertType } from '../../shared/models/alert.model';

@Component({
  selector: 'app-dynamic-alert',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './dynamic-alert.component.html',
  styleUrl: './dynamic-alert.component.scss'
})
export class DynamicAlertComponent {

  // Templates
  template: Array<AlertPayload> = [
    {type: AlertType.primary, heading: "This is a primary alert", body: 'This is a dummy body for the primary alert'},
    {type: AlertType.danger, heading: "This is a error alert", body: 'This is a error body for the error alert'},
    {type: AlertType.warning, heading: "This is a warning alert", body: 'This is a dummy body for the warning alert'}
  ];

  // Payload for alerts
  alertPayload: AlertPayload = {type: AlertType.secondary, heading: 'This is a default heading', body: 'This is the default body content on the alert'};
}
