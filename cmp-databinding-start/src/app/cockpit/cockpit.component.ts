import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName: serverName.value, blueprintContent: this.newServerContent});
  }

}
