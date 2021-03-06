import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  // templateUrl: './first.component.html',
  // styleUrls: ['./first.component.css']

  // .toUpperCase() is a JS function
  template: `{{name}}<br>
             {{name.toUpperCase()}}<br>
             {{hello()}}<br>
             {{siteUrl}}<br>
             <br>
             <input [id]="txt" type="text" value='Angular9'/>
             <input [disabled]="false" id="{{txt}}" type="text" value='Angular9'/>`,
  // 倒数第二行的 id 是 property binding
  // 倒数第一行的 id 是 interpolation
  styles: []
})

export class FirstComponent implements OnInit {

  public txt = "myId";
  public siteUrl = window.location.href;
  constructor() { }

  public name = "John Smith"

  ngOnInit(): void {
  }

  hello() {
    return "HELLO WORLD"
  }

}
