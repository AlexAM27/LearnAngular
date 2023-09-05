import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding-appointment';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(num: number) {
    if (num % 2 !== 0) {
      this.oddNumbers.push(num);
    } else {
      this.evenNumbers.push(num);
    }
  }
}
