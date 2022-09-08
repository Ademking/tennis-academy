import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
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


  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private toast: HotToastService) {
  }

  ngOnInit(): void {
    // get id from url
    this.route.params.subscribe((params: any) => {
      this.getCurrentUser();
      this.getCourseDetails(params.id);
    });
  }

  getCurrentUser() {
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

  /**
   * Get the course rating
   */
  get courseRating() {

      let rating = 0;
      if (this.course) {
        this.course.reviews.forEach((review: any) => {
          rating += review.rating;
        });
        rating = rating / this.course.reviews.length;
      }

      return rating;



}

reviewVal: number = 0;
reviewText!: string;

postReview() {

  if (this.reviewVal == 0) {
    this.toast.error('Please select a rating');
    return;
  }

  if (this.reviewText == '') {
    this.toast.error('Please enter a review');
    return;
  }

  // post review to backend
  this.dataService.postReview(this.course.id, this.reviewVal, this.reviewText).subscribe({
    next: (data: any) => {
      this.toast.success("Review posted successfully");
      this.getCourseDetails(this.course.id);
      this.reviewVal = 0;
      this.reviewText = "";
    },
    error: (err: any) => {
      this.toast.error("Error posting review");
    }
  })
}


}

