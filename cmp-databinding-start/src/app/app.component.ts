import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  
  onServerAdded(serverCreated: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverCreated.serverName,
      content: serverCreated.serverContent
    });
  }

  onBlueprintAdded(blueprintCreated: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintCreated.blueprintName,
      content: blueprintCreated.blueprintContent
    });
  }
 
}
