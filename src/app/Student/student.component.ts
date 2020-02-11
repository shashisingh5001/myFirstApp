import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  firstName:string;
  lastName:string;
  buttonClicked:string;
  constructor() { }

  ngOnInit() {
    this.firstName= 'Rohini';
    this.lastName= 'Mule';
  }

  getTotalNumber(): number{
    let a=20;
    let b=30;
    return a*b;
  }
  onSubmit(): void{
    this.buttonClicked='I clicked this button';
  }
}
