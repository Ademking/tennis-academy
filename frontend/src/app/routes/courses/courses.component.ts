import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openCourseDetails(course: any) {
    alert(course.id);
  }
  courseData = [
    {
      id: 1,
      type: 'Improver to Intermediate',
      title: 'JUNIOR COACHING',
      description: 'TW Tennis offers a fun, open and inspiring junior coaching experience that offers players classes from grass roots level to competition standard. Our highly experienced coaches and assistants will help develop the right mix of technical and tactical improvement, whilst making sure that each class is fun and players are happy learning on cour',
      image: 'https://www.usta.com/content/dam/usta/Articles/2021-primary/Junior-Circuit-1170x585.jpg.thumb.1280.1280.png',
      coach: 'John Doe',
      coachAvatar: 'https://picsum.photos/400/400?v' + Math.random(),
      price: '200 TND',
    },
    {
      id: 2,
      type: 'Adult Improver Group Coaching',
      title: 'ADULT COACHING',
      description: 'TW Tennis offers a great adult group coaching programme that caters for a range of levels of play and experience. You can join a class at a suitable time at the weekend or in the summer months, we have evening courses that are available as well. The classes are well organised, feature an easy to follow programme and allow players to follow a pathway of progression as they improve their skills.',
      image: 'https://clubspark.lta.org.uk/Library/IverHeathTennisClub?command=Proxy&lang=en&type=Images&currentFolder=%2F&hash=8d97b505b4753bb38f53f5c67967148289554ab9&fileName=socialtennis.jpg',
      coach: 'Anna Doe',
      coachAvatar: 'https://picsum.photos/400/400?v' + Math.random(),
      price: '300 TND',
    },
    {
      id: 3,
      type: '1:1 Tennis Assessment and 60 mins Lesson',
      title: 'PRIVATE LESSONS',
      description: 'If you are looking to work on something specific on the tennis court, or are looking for a specific time of the week, then we recommend looking into a private tennis lesson slot. Your coach for these types of classes can work on something that you have discussed or areas that are specific to your own development. They are particularly useful for technical skills and TW Tennis can offer players the latest advice on the game and access to things such as video analysis feedback and goal setting.',
      image: 'https://bodyswottennis.co.uk/wp-content/uploads/2017/01/Private-tennis-lessons-London-5-1000.jpg',
      coach: 'Elizabeth Doe',
      coachAvatar: 'https://picsum.photos/400/400?v' + Math.random(),
      price: '400 TND',
    },
    {
      id: 4,
      type: 'Cardio Tennis Class',
      title: 'CARDIO TENNIS',
      description: 'Cardio Tennis is a cross over between a fitness class and a tennis group coaching lesson that is set to heart pumping music. The classes are suitable for every level of play and are a great outdoor workout and a fun way to carry on your tennis each, meet new friends and get fitter on court.',
      image: 'https://www.lta.org.uk/48e721/contentassets/e15d50ef3c1c4849a454ce25c2a51259/cardio-tennis1.png?w=1200',
      coach: 'George Doe',
      coachAvatar: 'https://picsum.photos/400/400?v' + Math.random(),
      price: '500 TND',
    }
  ]
}
