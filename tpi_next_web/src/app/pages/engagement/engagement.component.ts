import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent {
  constructor() { }

  ngOnInit() { }
}
