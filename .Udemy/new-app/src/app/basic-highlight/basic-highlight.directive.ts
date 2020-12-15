import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasciHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { //достъпваме елемента
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'; //променяме цвета на елемента
    }
}