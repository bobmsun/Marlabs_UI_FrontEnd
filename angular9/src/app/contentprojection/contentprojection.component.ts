import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  template: `
    <div class="container">
      <ng-content select="h1"></ng-content>
      <h3>{{greetText}}</h3>
      <ng-content select="button"></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class ContentprojectionComponent implements OnInit {

  constructor() { }
  public greetText = "Dummy Text from the Child"

  ngOnInit(): void {
  }

}
