import { Component, OnInit } from '@angular/core';
//import{ students} from '../model/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any[]=[];
  selectedStudent:any;
  msg:string;
  counter : number;

  constructor() { }

  ngOnInit() {
    this.students=[
    {
    'id':1,
    'name':'Anu',
    'email':'cd@gmail.com',
    'marks':35,
    'total':700,
    'percentage':'75%'
    },
    {
      'id':2,
      'name':'Anu',
      'email':'jjdhfjh@gmail.com',
      'marks':67,
      'total':7700,
      'percentage':'90%'
      },
      {
        'id':3,
        'name':'jhjfs',
        'email':'bjsd@gmail.com',
        'marks':34,
        'total':400,
        'percentage':'35%'
        },
        {
          'id':4,
          'name':'hiiii',
          'email':'ture@gmail.com',
          'marks':44,
          'total':400,
          'percentage':'55%'
          }
  ];

  }
  selectStudent(student: any):void{
    this.selectedStudent=student;
  }
  getBackgroundColor(student: any):void{
    let color;
    if(student.marks>65){
      color='green';
    }else{
      color='yellow';
    }
    return color;
  }

}
