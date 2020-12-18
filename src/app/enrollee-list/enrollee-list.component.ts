import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Enrollee } from '../enrollee';

//Services
import { EnrolleeService } from "../enrollee.service";

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.css']
})
export class EnrolleeListComponent implements OnInit {
  enrollees: Observable<Enrollee[]>;

  constructor(private enrolleeService: EnrolleeService,
    private router: Router) {
      this.enrollees = this.enrolleeService.getEnrolleesList();
     }

  ngOnInit(): void {
    this.enrollees = this.enrolleeService.getEnrolleesList();
  }

  reloadData() {
    this.enrollees = this.enrolleeService.getEnrolleesList();
  }

  updateEnrollee(id: number){
    this.router.navigate(['update', id]);
  }

}
