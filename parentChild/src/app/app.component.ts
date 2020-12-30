import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentChild';
  currentEmployee : any;
  employees : any =[
    {name:'Vinny', age:'25',address:'Missouri',role:'Developer',salary:'80000'},
    {name:'Vindya', age:'29',address:'Texas',role:'Tester',salary:'85000'},
    {name:'Vicky', age:'27',address:'Boston',role:'Quality Engineer',salary:'100000'},
    {name:'Vinu', age:'26',address:'Missouri',role:'Developer',salary:'90000'} 
  ];

  onSelectedEmployee(employee : any){
    this.currentEmployee= employee ;
    console.log(employee); 
  }

}
