import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollee } from '../enrollee';

//Services
import { EnrolleeService } from '../enrollee.service';

@Component({
  selector: 'app-modify-enrollee',
  templateUrl: './modify-enrollee.component.html',
  styleUrls: ['./modify-enrollee.component.css']
})
export class ModifyEnrolleeComponent implements OnInit {
  id: number;
  enrollee: Enrollee;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private enrolleeService: EnrolleeService) { 
      this.id = 0;
      this.enrollee = {
        id: 0,
        name: "string",
        dateOfBirth: "string",
        active:  false
      };
     }

  ngOnInit() {
    this.enrollee = new Enrollee();

    this.id = this.route.snapshot.params['id'];
    
    this.enrolleeService.getEnrollee(this.id)
      .subscribe(data => {
        console.log(data)
        this.enrollee = data;
      }, error => console.log(error));
  }

  updateEnrollee() {
    this.enrolleeService.updateEnrollee(this.id, this.enrollee)
      .subscribe(data => {
        console.log(data);
        this.enrollee = new Enrollee();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateEnrollee();    
  }

  gotoList() {
    this.router.navigate(['/enrollees']);
  }
}


