import { Component, OnInit, Input, OnChanges, ViewEncapsulation, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges { //a good practice to inplement OnInit, OnChanges
  @Input('srvElement') element: {type: string, name: string, content: string}; //в скобите е allias на елемента, с който се достъпва отвън
 
 
  constructor() { 
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

}
