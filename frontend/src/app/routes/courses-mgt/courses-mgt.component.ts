import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-mgt',
  templateUrl: './courses-mgt.component.html',
  styleUrls: ['./courses-mgt.component.scss']
})
export class CoursesMgtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  courses = [
    {
      id: 1,
      name: 'Beginner Course',
      description: 'This is a beginner course',
      price: '100 TND',
      duration: '1 week',
      image: 'assets/images/courses/course-1.jpg'
    },
    {
      id: 2,
      name: 'Intermediate Course',
      description: 'This is an intermediate course',
      price: '150 TND',
      duration: '2 week',
      image: 'assets/images/courses/course-2.jpg'
    },
    {
      id: 1,
      name: 'Advanced Course',
      description: 'This is an advanced course',
      price: '200 TND',
      duration: '3 week',
      image: 'assets/images/courses/course-3.jpg'
    },

  ]

  isNewModalOpen = false;
  isEditModalOpen = false

  toggleNewModal() {
    this.isNewModalOpen = !this.isNewModalOpen;
  }

  toggleEditModal() {
    this.isEditModalOpen = !this.isEditModalOpen;
  }

}
