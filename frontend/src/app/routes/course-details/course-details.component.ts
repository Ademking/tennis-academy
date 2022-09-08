import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {


  isModalOpen: boolean = false;
  currentUser!: any;
  courseDate = new Date();
  course: any;


  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
   // get id from url
    this.route.params.subscribe((params: any) => {
      this.getCurrentUser();
      this.getCourseDetails(params.id);
    });
  }

  getCurrentUser(){
    this.dataService.myData().subscribe((data: any) => {
      this.currentUser = data.user;
    });
  }


  goToCheckout() {

    this.isModalOpen = true;


    // // go to route checkout

    // this.router.navigate(['/user/courses/1/checkout']);
  }


  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }



  getCourseDetails(courseId: string) {
    // get course details from backend
    this.dataService.getCourseDetails(courseId).subscribe((data: any) => {
      this.course = data;
    });
  }

}
