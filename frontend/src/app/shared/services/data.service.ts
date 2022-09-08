import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {




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

}
