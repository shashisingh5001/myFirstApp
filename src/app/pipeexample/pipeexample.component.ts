import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {

currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate= new Date();
  }

}
