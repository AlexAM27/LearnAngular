import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: 'game-control.component.html',
  styleUrls: ['game-control.component.css'],
})

export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>()

  lastNumber = 0;
  interval: any;

  ngOnInit(): void {
    
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1500);

  }

  onGameStop() {
    clearInterval(this.interval);
  }





}