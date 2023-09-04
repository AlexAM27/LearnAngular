import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(serverName: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName: serverName.value, blueprintContent: this.serverContentInput.nativeElement.value});
  }

}
