import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return [
      {"id" : 1, "name":"Suresh", "language":"Java"},
      {"id" : 2, "name":"Suneel", "language":".Net"},
      {"id" : 3, "name":"Stanley", "language":"Java"},
      {"id" : 4, "name":"Vinay", "language":"Python"},
      {"id" : 5, "name":"Rajesh", "language":"Powershell"}
    ];
  }
}
