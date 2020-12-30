import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  ngOnInit(): void {
   console.log("employee object in child component:",this.employee)
  }
  @Input()
  employee : any ;

}
