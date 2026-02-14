import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  constructor() {}

  playBackgroundMusic(): void {
    if (!this.audio) {
      // Using local audio file
      this.audio = new Audio('assets/trimmed-audio.m4a');
      this.audio.loop = true;
      this.audio.volume = 0.2;
    }

    if (!this.isPlaying) {
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
          })
          .catch((error) => {
            console.log('Autoplay prevented. Audio will play on user interaction.', error);
            this.isPlaying = false;
          });
      }
    }
  }

  stopBackgroundMusic(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  resumeBackgroundMusic(): void {
    this.playBackgroundMusic();
  }
}
