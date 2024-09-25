import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  public greeting: string = 'Willkommen auf unserer Seite!';

  constructor() {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting = 'Guten Morgen!';
    } else if (hour >= 12 && hour < 18) {
      this.greeting = 'Guten Tag!';
    } else {
      this.greeting = 'Guten Abend!';
    }
  }
}