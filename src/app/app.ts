import {AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit{
  protected readonly title = signal('streamer');

  @ViewChild('target', {static: true}) target!: ElementRef;
  player!:  Player;

  ngAfterViewInit() {
    this.player = videojs(this.target.nativeElement,
      {
        fluid: true,
        sources: [
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'
          }
        ]
      }
    );
  }

  ngOnInit() {

  }
}
