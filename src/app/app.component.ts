import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrnaComponent } from './components/urna/urna.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UrnaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Urna';
}

