import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cooks-card',
  templateUrl: './cooks-card.component.html',
  styleUrls: ['./cooks-card.component.css']
})
export class CooksCardComponent implements OnInit {

  @Input('cook') cook;

  constructor() { }

  ngOnInit(): void {
  }

}
