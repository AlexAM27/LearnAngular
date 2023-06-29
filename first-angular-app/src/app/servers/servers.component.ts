import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'Server is not created'
  userName = ''
  serverName = ''
  isParagraphShowing = false
  listOfClicks: Date[] = []

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000)
  }

  createServer() {
    this.serverCreationStatus = 'Server is created. Server name: ' + this.serverName
    
  }

  // updateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  clearUserName() {
    this.userName = ''
  }

  showParagraph() {
    this.isParagraphShowing = true;
    this.listOfClicks.push(new Date())
  }

  getColor() {
    if(this.listOfClicks.length > 4) {
      return 'blue'
    }
    return ''
  }
}
