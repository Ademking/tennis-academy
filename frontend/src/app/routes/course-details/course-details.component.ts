import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {


  isModalOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToCheckout() {

    this.isModalOpen = true;


    // // go to route checkout

    // this.router.navigate(['/user/courses/1/checkout']);
  }


  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  courseDate = new Date();


  course: any =  {
    id: 1,
    type: 'Improver to Intermediate',
    title: 'JUNIOR COACHING',
    description: 'TW Tennis offers a fun, open and inspiring junior coaching experience that offers players classes from grass roots level to competition standard. Our highly experienced coaches and assistants will help develop the right mix of technical and tactical improvement, whilst making sure that each class is fun and players are happy learning on cour',
    image: 'https://www.usta.com/content/dam/usta/Articles/2021-primary/Junior-Circuit-1170x585.jpg.thumb.1280.1280.png',
    coach: 'John Doe',
    coachAvatar: 'https://picsum.photos/400/400?v' + Math.random(),
    price: '200 TND',
  }
}
