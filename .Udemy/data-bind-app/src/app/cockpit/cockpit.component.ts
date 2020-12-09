import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  //@ViewChild('serverContentInput') serverContentInput: ElementRef; <-достъпва елемент с референция в html-a #serverContentInput

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() { //аргумент nameInput
   // console.log(nameInput.value)
    this.serverCreated.emit({
      serverName: this.newServerName, //защото приемаме аргумент nameInput - без него: this.newServerName
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, //this.newServerName
      serverContent: this.newServerContent
    });
  }

}
