import { Component } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula1';

  faComment = faComment;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
