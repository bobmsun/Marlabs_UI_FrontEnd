import { Component } from '@angular/core';

@Component({                      // connection to other files, this is the class file 
  selector: 'app-root',           // difine the selector for this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';
}
