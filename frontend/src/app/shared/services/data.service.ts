import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * Check if user is already enrolled to a course
   * @param courseId;
   * @returns
   */
  isUserAlreadyEnrolled(courseId: any) {
    return this.http.get(environment.API_URL + '/courses/' + courseId + '/is-enrolled')
  }
  myCourses() {
    return this.http.get(environment.API_URL + '/me/courses')
  }
  postReview(id: any, reviewVal: number, reviewText: string) {
    return this.http.post(environment.API_URL + '/courses/' + id + '/review', {
      rating: reviewVal,
      text: reviewText
    })

  }

  getCourseDetails(id: any) {
    return this.http.get(environment.API_URL + '/courses/' + id)
  }

  baseUrl = environment.API_URL
  constructor(private http: HttpClient) { }

  /**
   * Returns connected user data
   */
  myData() {
    console.log("Calling myData service");
    return this.http.get(environment.API_URL + '/me')
  }

  getAllCourses() {
    return this.http.get(environment.API_URL + '/courses')
  }

  getAllCoaches() {
    return this.http.get(environment.API_URL + '/coaches')
  }

  purchaseCourse(courseId: any, cardDetails: any, startDate: any) {
    return this.http.post(environment.API_URL + '/courses/' + courseId + '/purchase', {
      cardDetails,
      startDate,
      courseId,
    })
  }

  getGuidelines(){
    return this.http.get(environment.API_URL + '/guidelines')
  }

}
