import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Hello {{fname}}
      <button (click)="firstEvent()">Send Event</button>
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input('parentData') public fname;
  @Output() public childEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  firstEvent(){
    this.childEvent.emit("Data from the Child");
  }
}
