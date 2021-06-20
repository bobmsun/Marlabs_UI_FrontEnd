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
  public hasError = true;
  public isSpecial = true;
  public highLight = 'orange';

  public messageClasses = {
    "text-danger": this.hasError,
    "text-success": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyle = {
    color: "blue",
    fontSize: "30px"
  }

  ngOnInit(): void {
  }

  onClick() {
    this.titleStyle.color = "green";
    console.log("The button is clicked")
  }

  getText(txt) {
    console.log(txt)
  }
}
