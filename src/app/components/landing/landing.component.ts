import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  noButtonStyle: string = '';

  constructor(private router: Router, private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.playBackgroundMusic();
  }

  onYesClick(): void {
    // Ensure audio is playing before navigation
    this.audioService.playBackgroundMusic();
    setTimeout(() => {
      this.router.navigate(['/yes']);
    }, 300);
  }

  onNoHover(): void {
    this.moveNoButton();
  }

  onNoClick(event: Event): void {
    event.preventDefault();
    this.moveNoButton();
  }

  private moveNoButton(): void {
    // Generate random positions with larger range for better escaping effect
    const randomX = (Math.random() * 300 - 150); // -150 to 150
    const randomY = (Math.random() * 300 - 150); // -150 to 150
    
    this.noButtonStyle = `transform: translate(${randomX}px, ${randomY}px);`;
  }
}
