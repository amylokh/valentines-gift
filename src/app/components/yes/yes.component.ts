import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yes.component.html',
  styleUrl: './yes.component.scss'
})
export class YesComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}
