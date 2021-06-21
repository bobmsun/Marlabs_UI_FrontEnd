import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Detail</h2>
  <ul *ngFor="let emp of employees">
    <li>{{emp.id}} {{emp.name}} {{emp.dept}}</li>
  </ul>
  `,
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "John", "dept":"Sales"},
    {"id": 1, "name": "John", "dept":"Sales"},
    {"id": 1, "name": "John", "dept":"Sales"},
    {"id": 1, "name": "John", "dept":"Sales"},
    {"id": 1, "name": "John", "dept":"Sales"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
