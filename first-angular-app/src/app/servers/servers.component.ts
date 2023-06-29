import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'Server is not created'
  serverName = ''

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000)
  }

  createServer() {
    this.serverCreationStatus = 'Server is created. Server name: ' + this.serverName
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
