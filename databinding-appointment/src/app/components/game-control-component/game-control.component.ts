import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: 'game-control.component.html',
  styleUrls: ['game-control.component.css'],
})

export class GameControlComponent implements OnInit {
  
  counter: number;
  interval: any;

  constructor() {
    this.counter = 0
  }

  ngOnInit(): void {
    
  }

  onGameStart() {
    this.interval = setInterval(() => this.counter++, 1500);
  }

  onGameStop() {
    clearInterval(this.interval);
  }





}