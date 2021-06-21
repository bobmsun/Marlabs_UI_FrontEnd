import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http:HttpClient) { }

  private _url: string = "/assets/data/employees.json"

  public getEmployees():Observable<IEmployee> {
    // return [
    //   {"id": 1, "name": "John", "dept":"Sales"},
    //   {"id": 1, "name": "John", "dept":"Sales"},
    //   {"id": 1, "name": "John", "dept":"Sales"},
    //   {"id": 1, "name": "John", "dept":"Sales"},
    //   {"id": 1, "name": "John", "dept":"Sales"},
    // ]
    
    // here we mimic the API call
    return this.http.get<IEmployee[]>(this._url)
  }


}
