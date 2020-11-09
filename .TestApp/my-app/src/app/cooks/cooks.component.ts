import { Component, OnInit } from '@angular/core';
import { cooks } from './../data/cooks';

@Component({
  selector: 'app-cooks',
  templateUrl: './cooks.component.html',
  styleUrls: ['./cooks.component.css']
})
export class CooksComponent implements OnInit {

  cooks: Array<any> = cooks;

  constructor() { }

  ngOnInit(): void {
  }

}
