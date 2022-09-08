import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HotToastService } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',

  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  avatarsPath = environment.STORED_IMAGES_URL;
  items!: MenuItem[];

  constructor(private toast: HotToastService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {

    const titleCase = (str: string) => {
      return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }

    this.dataService.myData().subscribe({
      next: (data: any) => {
        this.userData = {
          name: data.user.firstname + ' ' + data.user.lastname,
          imgSrc: data.user.avatar,
          occupation: titleCase(data.role)
        }
      },
      error: (err) => {
        this.toast.error(err.error.message);
      }
    })


    this.getMyCourses();


  }

  value!: Date;

  userData!: any;

  openCoursesPage() {
    this.router.navigate(['/user/courses'])
  }


  myCourses: any[] = [];


  getMyCourses() {
    this.dataService.myCourses().subscribe({
      next: (data: any) => {
        this.myCourses = data.courses;
        console.log(this.myCourses);
      },
      error: (err) => {
        this.toast.error(err.error.message);
      }
    })
  }


}
