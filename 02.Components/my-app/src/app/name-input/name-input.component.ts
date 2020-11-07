import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnDestroy, OnInit {
  
  inputValue = 'Dummy value';
  
  btnClickHandler(value): void {
    console.log('btn was clicked!', value);
  }

  btnKeyupHandler(event: KeyboardEvent): void {
    this.inputValue = (event.target as HTMLInputElement).value;  //с as HTMLInputElement после подсказва свойствата на елемента
  } 
  
  btnClickHandlerNew(value: KeyboardEvent, inputEl: HTMLInputElement): void {
    console.log('btn was clicked!', value);
    console.log('input value is: ', inputEl.value);
  }

  ngOnInit(): void {
    console.log('name input component was created');
  }

  ngOnDestroy(): void {
    console.log('name input component was destroyed');
  }

    constructor() { }

}
