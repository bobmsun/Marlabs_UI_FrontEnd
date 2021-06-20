import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})

export class ClassBindingComponent implements OnInit {

  constructor() { }

  public successClass = "text-success";
  public specialClass = "text-special";

  ngOnInit(): void {
  }

}
